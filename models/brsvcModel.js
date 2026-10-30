const mongoose = require('mongoose');

const branchOfServiceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: 'Name is required'
    },
    brsvc: {
      type: String,
      trim: true,
      required: true
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

const BranchOfService = mongoose.model(
  'BranchOfService',
  branchOfServiceSchema
);
module.exports = BranchOfService;
