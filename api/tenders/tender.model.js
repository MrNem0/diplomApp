const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  tenderName: { type: String, required: true },
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
  previewImage: {
    type: String,
    default: 'https://source.unsplash.com/random/400x200'
  },
  createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Tender', schema);
