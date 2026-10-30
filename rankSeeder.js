import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import ranks from "./data/ranks.js";
import Rank from './models/rankModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Rank.deleteMany();

    const sampleRanks = ranks.map((rango) => {
      return { ...rango };
    });

    await Rank.insertMany(sampleRanks);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Rank.deleteMany();

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