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

app.use(cors({
  origin: [""],
  methods: ["POST", "GET"],
  credentials: true
}));