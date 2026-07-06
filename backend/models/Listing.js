const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  food: { type: String, required: true },
  source: { type: String, required: true },
  serves: { type: Number, required: true },
  locality: { type: String, required: true },
  city: { type: String, required: true },
  contact: { type: String, required: true },
  postedBy: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  claimed: { type: Boolean, default: false },
  claimedBy: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);