import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import verbalquiz from './data/verbalquiz.js';
import VerbalQuiz from './models/verbalModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await VerbalQuiz.deleteMany();

    const sampleVerbalQuiz = verbalquiz.map((quizverbal) => {
      return { ...quizverbal };
    });

    await VerbalQuiz.insertMany(sampleVerbalQuiz);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await VerbalQuiz.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
