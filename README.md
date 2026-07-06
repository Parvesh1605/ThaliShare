<div align="center">

# 🍽️ ThaliShare

### Connecting surplus banquet food to the people who need it — before it spoils.

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Space+Grotesk&size=22&duration=3000&pause=1000&color=E8A33D&center=true&vCenter=true&width=600&lines=Hotels+post+surplus+food.;NGOs+claim+it+in+seconds.;Meals+saved%2C+not+wasted.)](https://git.io/typing-svg)

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🌍 The Problem

Metro hotels, resorts, and banquet halls in India generate large amounts of surplus food after weddings, conferences, and buffets — food that's still safe to eat but has nowhere to go before it spoils. Meanwhile, verified NGOs are actively looking for exactly this kind of food to redistribute to people who need it.

**ThaliShare is the bridge between the two.**

## ✨ Features

- 🏨 **Hotel/Resort accounts** — post surplus food with quantity, pickup location, and a live countdown window
- 🤝 **NGO/Volunteer accounts** — browse and claim available food in their city, first-come-first-served
- 🌆 **City-based matching** — scoped to 8 major Indian metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad)
- ⏱️ **Live urgency rings** — a visual countdown on every listing that shifts color as the pickup window closes
- 🔐 **Secure authentication** — passwords hashed with bcrypt, real accounts stored in MongoDB
- 📊 **Impact tracking** — running totals of meals saved, kilograms rescued, and pickups completed
- 📱 **Fully responsive** — works on desktop, tablet, and mobile

<div align="center">

### 🔄 How It Works

```
🏨 Hotel posts surplus  ──▶  📢 NGOs in that city notified  ──▶  🤝 NGO claims pickup  ──▶  📊 Impact tracked
```

</div>

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB (Atlas) with Mongoose |
| Auth | bcryptjs password hashing |
| Deployment | Vercel (frontend) |

## 📂 Project Structure

```
ThaliShare/
├── backend/
│   ├── models/
│   │   ├── User.js          # Hotel/Resort or NGO account schema
│   │   └── Listing.js       # Surplus food post schema
│   ├── index.js             # Express server + API routes
│   ├── .env                 # Secret DB connection (not committed)
│   └── package.json
├── frontend/
│   ├── index.html           # Home page
│   ├── login.html           # Login page
│   ├── signup.html          # Signup page (Hotel/NGO role picker)
│   ├── dashboard.html        # City-scoped surplus feed
│   └── style.css            # Shared styles
└── README.md
```

## 🚀 Getting Started Locally

**1. Clone the repo**
```bash
git clone https://github.com/Parvesh1605/ThaliShare.git
cd ThaliShare
```

**2. Set up the backend**
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

**3. Run the backend**
```bash
node index.js
```

**4. Open the frontend**

Open `frontend/index.html` in your browser (or use a Live Server extension in VS Code).

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/signup` | Create a new Hotel/Resort or NGO account |
| POST | `/api/login` | Log in to an existing account |
| POST | `/api/listings` | Post a new surplus food listing |
| GET | `/api/listings?city=Mumbai` | Get all listings for a city |
| PATCH | `/api/listings/:id/claim` | Claim a listing for pickup |

## 🗺️ Roadmap

- [ ] Real-time notifications (WhatsApp/SMS) when new surplus is posted
- [ ] Geolocation-based matching instead of city-only
- [ ] NGO verification (registration number check)
- [ ] Hotel CSR impact reports (monthly PDF export)
- [ ] Admin dashboard for platform oversight

## 🙋 About This Project

ThaliShare is a student-built prototype aimed at reducing food waste from metro hotels and resorts by connecting them directly with NGOs already doing food rescue work across India — including organizations like Robin Hood Army, Feeding India, No Food Waste, Akshaya Patra Foundation, and Goonj.

---

<div align="center">

Made with 🧡 to fight food waste, one thali at a time.

</div>
