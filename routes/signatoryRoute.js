const express = require('express');
const router = express.Router();
const {
  protect,
  psychometricianOnly,
  adminOnly
} = require('../middleware/authMiddleware');
const {
  registerSignatory,
  getSignatory,
  getSignatories,
  updateSignatory,
  createSignatory
} = require('../controllers/signaController');

router.post('/createSignatory', protect, createSignatory);
router.post('/register', protect, registerSignatory);
router.get('/getSignatory/:id', protect, getSignatory);
router.get('/getSignatories', protect, getSignatories);
router.patch('/updateSignatory', protect, updateSignatory);

module.exports = router;
