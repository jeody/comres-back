const mongoose = require('mongoose');

const signatorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    rank: {
      type: String,
      trim: true
    },
    brsvc: {
      type: String,
      trim: true
    },
    schooling: {
      type: String,
      trim: true
    },
    designation: {
      type: String,
      trim: true
    },
    afpsn: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Signatory = mongoose.model('Signatory', signatorySchema);
module.exports = Signatory;
