const mongoose = require('mongoose');

const HeroContentSchema = new mongoose.Schema({
  headline: String,
  subtext: String,
  ctaLabel: String
});

module.exports = mongoose.model('HeroContent', HeroContentSchema);
