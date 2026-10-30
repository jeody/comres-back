const mongoose = require('mongoose');

const resultSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    examinee_code: {
      type: String,
      trim: true
    },
    last_name: {
      type: String,
      trim: true
    },
    first_name: {
      type: String,
      trim: true
    },
    mi: {
      type: String,
      trim: true
    },
    highest_educ: {
      type: String,
      trim: true
    },
    educ_id: {
      type: Number
    },
    religion: {
      type: String,
      trim: true
    },
    religion_id: {
      type: Number
    },
    age: {
      type: Number
    },
    contact_number: {
      type: String
    },
    ethnic_grp: {
      type: String,
      trim: true
    },
    ethnic_id: {
      type: Number
    },
    gender: {
      type: String
    },
    civil_status: {
      type: String,
      trim: true
    },
    region: {
      type: String,
      trim: true
    },
    region_id: {
      type: Number
    },
    abstract_score: {
      type: Number
    },
    abstract_percent: {
      type: Number
    },
    verbal_score: {
      type: Number
    },
    verbal_percent: {
      type: Number
    },
    numeric_score: {
      type: Number
    },
    numberPercent: {
      type: Number
    },
    total_score: {
      type: Number
    },
    totalPercent: {
      type: Number
    },
    grade: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    remarks: {
      type: String,
      trim: true
    },
    eligibility: {
      type: String,
      trim: true
    },
    upload_date: {
      type: Date
    },
    next_retake: {
      type: Date
    },
    brsvc_id: {
      type: String,
      trim: true
    },
    purpose_id: {
      type: Number
    },
    csv_id: {
      type: Number
    },
    status: {
      type: String
    },
    user_id: {
      type: Number
    },
    ato_id: {
      type: Number
    },
    queried: {
      type: String,
      default: null
    },
    query_date: {
      type: Date
    },
    form: {
      type: String
    },
    is_uploaded: {
      type: Boolean,
      default: false
    },
    exam_date: {
      type: Date
    },
    purposeOfExam: {
      type: String
    },
    branchOfService: {
      type: String
    },
    batchCode: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Result = mongoose.model('Result', resultSchema);
module.exports = Result;
