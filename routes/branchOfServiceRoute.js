const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
  createBranchOfService,
  getBranchOfServices,
  deleteBranchOfService
} = require('../controllers/branchOfServiceController');
const router = express.Router();

router.post(
  '/createBranchOfService',
  protect,
  adminOnly,
  createBranchOfService
);
router.get('/getBranchOfServices', protect, getBranchOfServices);
router.delete('/:slug', protect, adminOnly, deleteBranchOfService);

module.exports = router;
