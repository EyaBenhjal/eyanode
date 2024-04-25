const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const salSchema = new Schema({
  Namesalle: {
    type: String,
    required: true
  },
    datedereservation: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  createdAt: { 
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('sall', salSchema);