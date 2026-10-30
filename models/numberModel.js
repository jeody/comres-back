const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const numberQuizSchema = mongoose.Schema(
  {
    set: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    imageQuestion: {
      type: String,
      default: null
    },
    options: {
      type: Object
    },
    imageOptions: {
      type: [Object]
    },
    instruction: {
      type: String
    },
    correctOption: {
      type: Number,
      default: 0
    },
    points: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  }
);

const NumberQuiz = mongoose.model('NumberQuiz', numberQuizSchema);
module.exports = NumberQuiz;
