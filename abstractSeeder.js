import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import abstractquiz from './data/abstractquiz.js';
import AbstractQuiz from './models/abstractModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await AbstractQuiz.deleteMany();

    const sampleAbstractQuiz = abstractquiz.map((quizabstract) => {
      return { ...quizabstract };
    });

    await AbstractQuiz.insertMany(sampleAbstractQuiz);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await AbstractQuiz.deleteMany();

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
