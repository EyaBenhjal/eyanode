const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reseSchema = new Schema({
    Namesalle: {
    type: String,
    required: true
  },
  nbreplace: {
    type: String,
    required: true
  },
  debutres: {
    type: String,
    required: true
  },
 finres: {
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

module.exports = mongoose.model('rese', reseSchema);