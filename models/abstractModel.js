const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const abstractQuizSchema = mongoose.Schema(
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
      // text, correct
    },
    imageOptions: {
      type: [Object]
      // text, correct
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

const AbstractQuiz = mongoose.model('AbstractQuiz', abstractQuizSchema);
module.exports = AbstractQuiz;
