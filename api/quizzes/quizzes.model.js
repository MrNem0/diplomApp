const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  quistions: [
    {
      text: String,
      options: [String],
      environment: String
    }
  ]
});

/* Virtuals */
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Quiz', schema);
