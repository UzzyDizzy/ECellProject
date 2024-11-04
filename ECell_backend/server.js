
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const HeroContent = require('./models/HeroContent');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/ecellhero";

// MongoDB connection
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Updated endpoint to retrieve hero content from MongoDB
app.get('/api/hero-content', async (req, res) => {
  try {
    const heroContent = await HeroContent.findOne();
    console.log("Fetched hero content:", heroContent); // Fetches the first document from the collection
    if (!heroContent) {
      return res.status(404).json({ message: "Hero content not found" });
    }
    res.json(heroContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching hero content" });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/*
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Simple endpoint for hero content
app.get('/api/hero-content', (req, res) => {
  res.json({
    headline: "Empowering Visionaries, Inspiring Innovators",
    subtext: "KIIT E-Cell fosters an entrepreneurial spirit in the youth.",
    ctaLabel: "Get Involved"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

*/