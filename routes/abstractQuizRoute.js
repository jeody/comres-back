const express = require('express');
const router = express.Router();
const {
  addQuiz,
  getQuestionaires,
  deleteQuestionaire,
  getQuestionaire,
  updateQuestionaire,
  getQuestions,
  abstractImageUpload,
  updateAbstractQuestion,
  abstractImageRemove,
  updateImageQuestion,
  abstractOptionImageRemove,
  updateOptionImage
} = require('../controllers/abstractQuizController');
const {
  protect,
  adminOnly,
  psychologistOnly,
  authorOnly
} = require('../middleware/authMiddleware');

router.post('/addQuiz', protect, psychologistOnly, addQuiz);
router.get('/getQuestionaire/:id', protect, psychologistOnly, getQuestionaire);
router.patch(
  '/updateAbstractQuestion',
  protect,
  psychologistOnly,
  updateAbstractQuestion
);
router.post(
  '/abstractImageUpload',
  protect,
  psychologistOnly,
  abstractImageUpload
);
router.post(
  '/abstractImageRemove',
  protect,
  psychologistOnly,
  abstractImageRemove
);
router.post(
  '/abstractOptionImageRemove',
  protect,
  psychologistOnly,
  abstractOptionImageRemove
);

router.get('/getQuestionaires', protect, getQuestionaires);
router.get('/getQuestions/:set', getQuestions);
router.post('/updateQuestionaire', protect, updateQuestionaire);
router.delete(
  '/deleteQuestionaire/:id',
  protect,
  psychologistOnly,
  deleteQuestionaire
);
router.post(
  '/updateImageQuestion',
  protect,
  psychologistOnly,
  updateImageQuestion
);
router.post('/updateOptionImage', protect, psychologistOnly, updateOptionImage);

module.exports = router;
