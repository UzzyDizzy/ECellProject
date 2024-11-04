// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import the HeroContent model
const HeroContent = require('./models/HeroContent');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || "mongodb+srv://UzzyDizzy:udit22@ecellhero.7vx5w.mongodb.net/";

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Endpoint to retrieve hero content from MongoDB
app.get('/api/hero-content', async (req, res) => {
  try {
    const heroContent = await HeroContent.find(); // Retrieves all documents from the collection
    if (!heroContent || heroContent.length === 0) {
      return res.status(404).json({ message: "Hero content not found" });
    }
    res.json(heroContent);
  } catch (error) {
    console.error("Error fetching hero content:", error);
    res.status(500).json({ message: "Error fetching hero content" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));