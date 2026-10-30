const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');

const {
  getRank,
  getRanks,
  updateRank,
  createRank,
  deleteRank
} = require('../controllers/rankController');

router.post('/createRank', protect, createRank);
router.get('/getRank/:id', protect, getRank);
router.get('/getRanks', protect, getRanks);
router.get('/deleteRank', protect, deleteRank);
router.patch('/updateRank', protect, updateRank);

module.exports = router;