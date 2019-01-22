const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  systemClass: { type: String, required: true },
  area: { type: String, required: true },
  duration: String,
  numberPerformers: Number,
  orgApproach: String,
  language: String,
  customer: String,
  standards: String,
  collaborators: Boolean,
  platform: String,
  otherRequirements: String,
  createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Tender', schema);
