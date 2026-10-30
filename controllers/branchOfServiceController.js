const asyncHandler = require('express-async-handler');
const BranchOfService = require('../models/brsvcModel');
const slugify = require('slugify');

// Create BranchOfService
const createBranchOfService = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('Please fill in BranchOfService name');
  }

  const branchOfServiceExists = await BranchOfService.findOne({ name });

  if (branchOfServiceExists) {
    res.status(400);
    throw new Error('BranchOfService name already exist.');
  }

  const branchofservice = await BranchOfService.create({
    name,
    slug: slugify(name)
  });

  res.status(201).json(branchofservice);
});

// Get Branch Of Services
const getBranchOfServices = asyncHandler(async (req, res) => {
  const branchofservices = await BranchOfService.find().sort('-createdAt');
  res.status(200).json(branchofservices);
});

// Delete BranchOfService
const deleteBranchOfService = asyncHandler(async (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const branchofservice = await BranchOfService.findOneAndDelete({ slug });

  // if category doesnt exist
  if (!branchofservice) {
    res.status(404);
    throw new Error('Branch Of Service not found');
  }
  res.status(200).json({ message: 'Branch Of Service deleted.' });
});

module.exports = {
  createBranchOfService,
  getBranchOfServices,
  deleteBranchOfService
};
