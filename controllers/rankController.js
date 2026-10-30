const asyncHandler = require('express-async-handler');
const Rank = require('../models/rankModel');
const mongoose = require('mongoose');

// Create Rank
const createRank = asyncHandler(async (req, res) => {
  const {
    rank_code,
    rank,
    rank_name,
    branchOfService,
    brsvc,
  } = req.body;

  //   Validation
  if (!rank_code || !rank || !rank_name || !branchOfService || !brsvc) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  // Create Rank
  const myrank = await Rank.create({
    rank_code,
    rank,
    rank_name,
    branchOfService,
    brsvc,
  });

  res.status(201).json(myrank);
});

// Get all Ranks
const getRanks = asyncHandler(async (req, res) => {
  const ranks = await Rank.find().sort('-createdAt');
  res.status(200).json(ranks);
});

// Get single rank
const getRank= asyncHandler(async (req, res) => {
  const rank = await Rank.findById(req.params.id);

  // if rank doesnt exist
  if (!rank) {
    res.status(404);
    throw new Error('Rank not found');
  }

  res.status(200).json(rank);
});

// Delete Rank
const deleteRank = asyncHandler(async (req, res) => {
  const rank = await Rank.findById(req.params.id);
  // if product doesnt exist
  if (!rank) {
    res.status(404);
    throw new Error('Rank not found');
  }

  // await rank.remove();
  await Rank.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Rank deleted.' });
});

// Update Rank
const updateRank = asyncHandler(async (req, res) => {
  const {
    rank_code,
    rank,
    rank_name,
    branchOfService,
    brsvc,
  } = req.body;

  const { id } = req.params;
  const myrank = await Rank.findById(id);

  // if product doesnt exist
  if (!myrank) {
    res.status(404);
    throw new Error('Rank not found');
  }

  // Update Product
  const updatedRank = await Rank.findByIdAndUpdate(
    { _id: id },
    {
    rank_code,
    rank,
    rank_name,
    branchOfService,
    brsvc,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(updatedRank);
});

module.exports = {
  createRank,
  getRanks,
  getRank,
  deleteRank,
  updateRank,
};
