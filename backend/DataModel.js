const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SinTaxData', dataSchema);