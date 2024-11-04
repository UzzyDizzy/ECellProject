const mongoose = require('mongoose');

const heroContentSchema = new mongoose.Schema({
  headline: String,
  subtext: String,
  ctaLabel: String
});

module.exports = mongoose.model('HeroContent', heroContentSchema);
