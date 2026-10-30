const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');

const {
  addMember,
  getMember,
  updateMember,
  photoUpload,
  updateMemberEduc,
  deleteCourse,
  editEduc,
  approveCourseS1,
  disApproveCourseS1,
  approveCourseG1,
  disApproveCourseG1,
  courseUpload,
  updateMemberTraining,
  editTraining,
  deleteTraining,
  approveTrainingS1,
  disApproveTrainingS1,
  approveTrainingG1,
  disApproveTrainingG1,
  trainingCourseUpload,
  updateActiveDuty,
  editActiveDuty,
  activeDutyUpload,
  addReservist,
  approveActiveDutyS1,
  disapproveActiveDutyS1,
  approveActiveDutyG1,
  disapproveActiveDutyG1,
  deleteActiveDuty,
  updateMemberDesignation,
  editDesignation,
  designationUpload,
  approveDesignationS1,
  disApproveDesignationS1,
  approveDesignationG1,
  disApproveDesignationG1,
  deleteDesignation,
  updateMemberAward,
  editAward,
  awardUpload,
  approveAwardS1,
  disApproveAwardS1,
  approveAwardG1,
  disApproveAwardG1,
  deleteAward,
  updateMemberDependent,
  editDependent,
  dependentUpload,
  approveDependentS1,
  disApproveDependentS1,
  approveDependentG1,
  disApproveDependentG1,
  deleteDependent,
  updateMemberPromotion,
  editPromotion,
  promotionUpload,
  approvePromotionS1,
  disApprovePromotionS1,
  disApprovePromotionG1,
  approvePromotionG1,
  deletePromotion,
  updateMemberActivity,
  editActivity,
  activityUpload,
  approveActivityS1,
  disApproveActivityS1,
  approveActivityG1,
  disApproveActivityG1,
  deleteActivity,
  getDataAndUpdate,
  getEducDataAndUpdate,
  getTrainingDataAndUpdate,
  getAdtDataAndUpdate,
  getDesignationDataAndUpdate,
  getAwardDataAndUpdate,
  getDependentDataAndUpdate,
  getPromotionDataAndUpdate,
  getActivityDataAndUpdate,
  getMembers,
  deleteReservist,
  addNewMember,
  updateMemberDerogatory,
//   deleteMember,
} = require('../controllers/memberController');

router.post('/', protect, addMember);
router.post('/addReservist', protect, addReservist);
router.get('/getMember/:id', protect, getMember);
router.patch('/:id', protect, updateMember);
router.patch('/updateMemberEduc/:id', protect, updateMemberEduc);
router.post('/photoUpload', protect, photoUpload);
router.delete('/deleteCourse/:parentId/item/:itemId', protect, deleteCourse);
router.patch('/editEduc/:parentId', protect, editEduc);
router.patch('/approveCourseS1/:parentId/item/:itemId', protect, approveCourseS1);
router.patch('/disApproveCourseS1/:parentId/item/:itemId', protect, disApproveCourseS1);
router.patch('/approveCourseG1/:parentId/item/:itemId', protect, approveCourseG1);
router.patch('/disApproveCourseG1/:parentId/item/:itemId', protect, disApproveCourseG1);
router.post('/courseUpload/:parentId/educ/:educId', protect, courseUpload);
router.patch('/updateMemberTraining/:id', protect, updateMemberTraining);
router.patch('/editTraining/:parentId', protect, editTraining);
router.delete('/deleteTraining/:parentId/item/:itemId', protect, deleteTraining);
router.patch('/approveTrainingS1/:parentId/item/:itemId', protect, approveTrainingS1);
router.patch('/disApproveTrainingS1/:parentId/item/:itemId', protect, disApproveTrainingS1);
router.patch('/approveTrainingG1/:parentId/item/:itemId', protect, approveTrainingG1);
router.patch('/disApproveTrainingG1/:parentId/item/:itemId', protect, disApproveTrainingG1);
router.post('/trainingCourseUpload/:parentId/train/:trainId', protect, trainingCourseUpload);
router.patch('/updateActiveDuty/:id', protect, updateActiveDuty);
router.patch('/editActiveDuty/:parentId', protect, editActiveDuty);
router.post('/activeDutyUpload/:parentId/active/:activeId', protect, activeDutyUpload);
router.patch('/approveActiveDutyS1/:parentId/item/:itemId', protect, approveActiveDutyS1);
router.patch('/disapproveActiveDutyS1/:parentId/item/:itemId', protect, disapproveActiveDutyS1);
router.patch('/approveActiveDutyG1/:parentId/item/:itemId', protect, approveActiveDutyG1);
router.patch('/disapproveActiveDutyG1/:parentId/item/:itemId', protect, disapproveActiveDutyG1);
router.delete('/deleteActiveDuty/:parentId/item/:itemId', protect, deleteActiveDuty);
router.patch('/updateMemberDesignation/:id', protect, updateMemberDesignation);
router.patch('/editDesignation/:parentId', protect, editDesignation);
router.post('/designationUpload/:parentId/desig/:desigId', protect, designationUpload);
router.patch('/approveDesignationS1/:parentId/desig/:desigId', protect, approveDesignationS1);
router.patch('/disApproveDesignationS1/:parentId/desig/:desigId', protect, disApproveDesignationS1);
router.patch('/approveDesignationG1/:parentId/desig/:desigId', protect, approveDesignationG1);
router.patch('/disApproveDesignationG1/:parentId/desig/:desigId', protect, disApproveDesignationG1);
router.delete('/deleteDesignation/:parentId/desig/:desigId', protect, deleteDesignation);
router.patch('/updateMemberAward/:id', protect, updateMemberAward);
router.patch('/editAward/:parentId', protect, editAward);
router.post('/awardUpload/:parentId/award/:awardId', protect, awardUpload);
router.patch('/approveAwardS1/:parentId/award/:awardId', protect, approveAwardS1);
router.patch('/disApproveAwardS1/:parentId/award/:awardId', protect, disApproveAwardS1);
router.patch('/approveAwardG1/:parentId/award/:awardId', protect, approveAwardG1);
router.patch('/disApproveAwardG1/:parentId/award/:awardId', protect, disApproveAwardG1);
router.delete('/deleteAward/:parentId/award/:awardId', protect, deleteAward);
router.patch('/updateMemberDependent/:id', protect, updateMemberDependent);
router.patch('/editDependent/:parentId', protect, editDependent);
router.post('/dependentUpload/:parentId/dependent/:dependentId', protect, dependentUpload);
router.patch('/approveDependentS1/:parentId/dependent/:dependentId', protect, approveDependentS1);
router.patch('/disApproveDependentS1/:parentId/dependent/:dependentId', protect, disApproveDependentS1);
router.patch('/approveDependentG1/:parentId/dependent/:dependentId', protect, approveDependentG1);
router.patch('/disApproveDependentG1/:parentId/dependent/:dependentId', protect, disApproveDependentG1);
router.delete('/deleteDependent/:parentId/dependent/:dependentId', protect, deleteDependent);
router.patch('/updateMemberPromotion/:id', protect, updateMemberPromotion);
router.patch('/editPromotion/:parentId', protect, editPromotion);
router.post('/promotionUpload/:parentId/promotion/:promotionId', protect, promotionUpload);
router.patch('/approvePromotionS1/:parentId/promotion/:promotionId', protect, approvePromotionS1);
router.patch('/disApprovePromotionS1/:parentId/promotion/:promotionId', protect, disApprovePromotionS1);
router.patch('/approvePromotionG1/:parentId/promotion/:promotionId', protect, approvePromotionG1);
router.patch('/disApprovePromotionG1/:parentId/promotion/:promotionId', protect, disApprovePromotionG1);
router.delete('/deletePromotion/:parentId/promotion/:promotionId', protect, deletePromotion);
router.patch('/updateMemberActivity/:id', protect, updateMemberActivity);
router.patch('/editActivity/:parentId', protect, editActivity);
router.post('/activityUpload/:parentId/activity/:activityId', protect, activityUpload);
router.patch('/approveActivityS1/:parentId/activity/:activityId', protect, approveActivityS1);
router.patch('/disApproveActivityS1/:parentId/activity/:activityId', protect, disApproveActivityS1);
router.patch('/approveActivityG1/:parentId/activity/:activityId', protect, approveActivityG1);
router.patch('/disApproveActivityG1/:parentId/activity/:activityId', protect, disApproveActivityG1);
router.delete('/deleteActivity/:parentId/activity/:activityId', protect, deleteActivity);
router.patch('/getDataAndUpdate/:id', protect, getDataAndUpdate);
router.patch('/getEducDataAndUpdate/:id', protect, getEducDataAndUpdate);
router.patch('/getTrainingDataAndUpdate/:id', protect, getTrainingDataAndUpdate);
router.patch('/getAdtDataAndUpdate/:id', protect, getAdtDataAndUpdate);
router.patch('/getDesignationDataAndUpdate/:id', protect, getDesignationDataAndUpdate);
router.patch('/getAwardDataAndUpdate/:id', protect, getAwardDataAndUpdate);
router.patch('/getDependentDataAndUpdate/:id', protect, getDependentDataAndUpdate);
router.patch('/getPromotionDataAndUpdate/:id', protect, getPromotionDataAndUpdate);
router.patch('/getActivityDataAndUpdate/:id', protect, getActivityDataAndUpdate);
router.get('/getMembers', protect, adminOnly, getMembers);
router.delete('/deleteReservist/:id', protect, adminOnly, deleteReservist);
router.post('/addNewMember', protect, adminOnly, addNewMember);
router.patch('/updateMemberDerogatory/:id', protect, updateMemberDerogatory);
// router.get('/getApplicants', protect, psychometricianOnly, getApplicants);

module.exports = router;