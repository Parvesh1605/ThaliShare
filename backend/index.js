require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./models/User');
const Listing = require('./models/Listing');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('ThaliShare backend is running!');
});

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password, role, city } = req.body;

    if (!name || !email || !password || password.length < 6) {
      return res.status(400).json({ error: 'Please provide name, email, and a password with 6+ characters.' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'An account with this email already exists. Try logging in instead.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role, city });

    res.json({ name: user.name, email: user.email, role: user.role, city: user.city });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong creating your account.' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'No account found with this email.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(400).json({ error: 'Incorrect password.' });
    }

    res.json({ name: user.name, email: user.email, role: user.role, city: user.city });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong logging in.' });
  }
});

app.post('/api/listings', async (req, res) => {
  try {
    const { food, source, serves, locality, city, contact, postedBy, windowHrs } = req.body;

    if (!food || !locality || !contact || !serves || serves <= 0) {
      return res.status(400).json({ error: 'Missing required fields for this listing.' });
    }

    const expiresAt = new Date(Date.now() + windowHrs * 60 * 60 * 1000);
    const listing = await Listing.create({ food, source, serves, locality, city, contact, postedBy, expiresAt });

    res.json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong posting this surplus food.' });
  }
});

app.get('/api/listings', async (req, res) => {
  try {
    const { city } = req.query;
    const filter = city ? { city } : {};
    const listings = await Listing.find(filter).sort({ expiresAt: 1 });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DEBUG: ' + err.message });
  }
});

app.patch('/api/listings/:id/claim', async (req, res) => {
  try {
    const { claimedBy } = req.body;
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      { claimed: true, claimedBy },
      { new: true }
    );
    res.json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DEBUG: ' + err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});