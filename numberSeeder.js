import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import numberquiz from './data/numberquiz.js';
import NumberQuiz from './models/numberModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await NumberQuiz.deleteMany();

    const sampleNumberQuiz = numberquiz.map((quiznumber) => {
      return { ...quiznumber };
    });

    await NumberQuiz.insertMany(sampleNumberQuiz);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await NumberQuiz.deleteMany();

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
