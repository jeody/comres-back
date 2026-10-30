const asyncHandler = require('express-async-handler');
const Member = require('../models/memberModel');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const imageValidate = require('../utils/imageValidate');
const permitValidate = require('../utils/permitValidate');

// Create Member
const addMember = asyncHandler(async (req, res) => {
  const {
        id,
        name,
        email,
        photo,
        phone,
        isVerified,
        address,
        barangay,
        city,
        cityId,
        country,
        province,
        provinceId,
        region,
        regionId,
        street,
        branchOfService,
        birthdate,
  } = req.body;

  //   Validation
  if (!name || !email || !isVerified || !city || !province || !region) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  // Create Member
  const member = await Member.create({
        user: req.user.id,
        name,
        email,
        photo,
        phone,
        isVerified,
        address,
        barangay,
        city,
        cityId,
        country,
        province,
        provinceId,
        region,
        regionId,
        street,
        branchOfService,
        birthdate,
  });

  const lastRecord = await Member.findOne().sort({ _id: -1 });
  const user = await User.findById(id);

  if (user) {
    user.isAddedMember = true;
    user.memberId = lastRecord._id;
    const updatedUser = await user.save();
  }

  res.status(201).json(member);
});

//addNewMember
const addNewMember = asyncHandler(async (req, res) => {

    try {
      const {id, rank, name, first_name, middle_name, last_name, suffix, afpsn} = req.body;

      //   Validation
      if (!rank || !first_name || !last_name || !afpsn) {
        res.status(400);
        throw new Error('Please fill in all fields!');
      } 

      // Create Member
      const member = await Member.create({
            user: req.user.id,
            rank,
            name,
            first_name,
            middle_name,
            last_name,
            suffix,
            afpsn,
      });

      res.status(201).json({
        message: 'New data successfully recorded!'
      });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

});

// Get member
const getMember = asyncHandler(async (req, res) => {
  const member = await Member.findById(req.params.id).sort('-createdAt');
  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member ID not found');
  }

  res.status(200).json(member);
});

// Update Member
const updateMember = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    rank,
    first_name,
    middle_name,
    last_name,
    suffix,
    afpsn,
    designation,
    reserve_unit,
    date_commission,
    authority,
    date_incorporated,
    date_retired,
    source_commission,
    unit_designation,
    dateUnitDesignation,
    unitDesignationAuthority,  
    initial_rank,
    date_last_promotion,
    lastPromotionAuthority,
    unitAssignment,
    effec_date_unit,
    unitAssignmentAuthority,
    reservist_status,
    afos,
    mobilization_unit,
    job,
    busi_address,
    busi_number,
    phone,
    email_add,
    street,
    barangay,
    city,
    cityId,
    province,
    provinceId,
    region,
    regionId,
    sex,
    marital_status,
    nationality,
    birthdate,
    birthplace,
    religion,
    blood_type,
    sss,
    height,
    weight,
    eyes,
    hair,
    size_boots,
    size_cap,
    size_bda,
    scars,
    tin,
    spoken_dialects,
    gsis,
    skills,
    emergency_name,
    emergency_address,
    emergency_relation,
    emergency_number,
    brsvc,
    age,
    rank_code,
    reserveGroup,
    bos
  } = req.body;

  const address = `${street}` + (barangay ? `, ${barangay}` : '') + (city ? `, ${city}` : '') + (province ? `, ${province}` : '');
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member not found');
  }

      let branchOfService = '';
      if(brsvc === 'PA') {
        branchOfService = "Philippine Army";
      } 
      if(brsvc === 'PAF') {
        branchOfService = "Philippine Air Force";
      }
      if(brsvc === 'PN') {
        branchOfService = "Philippine Navy";
      }
      if(brsvc === 'PN(M)') {
        branchOfService = "Philippine Marine";
      }
      if(brsvc === 'TAS') {
        branchOfService = "Technical & Administrative Service";
      }

  // Update Member
  const updatedMember = await Member.findByIdAndUpdate(
    { _id: id },
    {
      name,
      email,
      rank,
      first_name,
      middle_name,
      last_name,
      suffix,
      afpsn,
      designation,
      reserve_unit,
      date_commission,
      authority,
      date_incorporated,
      date_retired,
      source_commission,
      unit_designation,
      dateUnitDesignation,
      unitDesignationAuthority,  
      initial_rank,
      date_last_promotion,
      lastPromotionAuthority,
      unitAssignment,
      effec_date_unit,
      unitAssignmentAuthority,
      reservist_status,
      afos,
      mobilization_unit,
      job,
      busi_address,
      busi_number,
      phone,
      email_add,
      street,
      barangay,
      city,
      cityId,
      province,
      provinceId,
      region,
      regionId,
      address,
      sex,
      marital_status,
      nationality,
      birthdate,
      birthplace,
      religion,
      blood_type,
      sss,
      height,
      weight,
      eyes,
      hair,
      size_boots,
      size_cap,
      size_bda,
      scars,
      tin,
      spoken_dialects,
      gsis,
      skills,
      emergency_name,
      emergency_address,
      emergency_relation,
      emergency_number,
      brsvc,
      branchOfService,
      age,
      rank_code,
      reserveGroup,
      bos
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(updatedMember);
});

// Update Member Education
const updateMemberEduc = asyncHandler(async (req, res) => {
  const { education } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member not found');
  }

    const updatedMemberEduc = await Member.findByIdAndUpdate(
      id,
      { $push: { education: education } }, // Pushes the object into the education array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updatedMemberEduc);

});

const photoUpload = async (req, res, next) => {
  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = imageValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
    // const uploadDirectory = path.resolve(
    //   __dirname,
    //   '../../frontend',
    //   'src',
    //   'photos'
    // );
    const uploadDirectory = path.resolve(
      __dirname,
      '../../backend',
      'uploads'
    );


    //console.log(req.query.userId);
    let member = await Member.findById(req.query.userId).orFail();

    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
      var fileName = uuidv4() + path.extname(image.name);
      var uploadPath = uploadDirectory + '/' + fileName;
      // member.photo = '/src/photos/' + fileName;
      member.photo = '/uploads/' + fileName;
      image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    await member.save();
    return res.send({ message: 'Reservist photo uploaded!' });
  } catch (err) {
    next(err);
  }
};

// Delete Course
const deleteCourse = asyncHandler(async (req, res) => {

    const { parentId, itemId } = req.params;

    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedDoc = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { education: { _id: itemId } } },
        { new: true }
      );

      res.status(200).json(updatedDoc);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

// Edit Course Education
const editEduc = asyncHandler(async (req, res) => {
  const { parentId, educId, course, school, location, date_started, date_completed } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{Course parent not found!${parentId}}`);
  }
    const editedEduc = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "education.$[education].course": course,
          "education.$[education].school": school,
          "education.$[education].location": location,
          "education.$[education].date_started": date_started,
          "education.$[education].date_completed": date_completed
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "education._id": educId }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedEduc) {
      return res.status(404).json({ message: "Course is not found" });
    }

    res.status(200).json(editedEduc);

});

// approveCourseS1
const approveCourseS1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;

    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const aprrovedCourse = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "education.$[education].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "education._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedCourse) {
        return res.status(404).json({ message: "Course is not found" });
      }

      res.status(200).json(aprrovedCourse);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// disApproveCourseS1
const disApproveCourseS1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;

    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const disAprrovedCourse = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "education.$[education].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "education._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disAprrovedCourse) {
        return res.status(404).json({ message: "Course is not found" });
      }

      res.status(200).json(disAprrovedCourse);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// approveCourseG1
const approveCourseG1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;

    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const aprrovedCourseG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "education.$[education].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "education._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedCourseG1) {
        return res.status(404).json({ message: "Course is not found" });
      }

      res.status(200).json(aprrovedCourseG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// disApproveCourseG1
const disApproveCourseG1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;

    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const disaprrovedCourseG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "education.$[education].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "education._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disaprrovedCourseG1) {
        return res.status(404).json({ message: "Course is not found" });
      }

      res.status(200).json(disaprrovedCourseG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// Upload Course Cert
const courseUpload = async (req, res, next) => {
  const { parentId, educId } = req.params;

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
 
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
    // let user = await User.findById(req.query.userId).orFail();
    // const parentId = '6a89091350132434487d8db1' 
    // const educId = '6a8cbad29249aa84a641caf3' 
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const coursePdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const coursePdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "education.$[education].coursePdf": coursePdf,
            "education.$[education].isUploaded": true,
            "education.$[education].isGood": false,
            "education.$[education].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "education._id": educId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

 // Update Member Training
const updateMemberTraining = asyncHandler(async (req, res) => {
  const { training } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`Member not found${id}`);
  }

    const updatedMemberTraining = await Member.findByIdAndUpdate(
      id,
      { $push: { training: training } }, // Pushes the object into the training array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updatedMemberTraining);

});

// Edit Course Training
const editTraining = asyncHandler(async (req, res) => {
  const { parentId, trainId, course, school, conducted_by, date_started, date_completed } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{Training course not found!${parentId}}`);
  }
    const editedTraining = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "training.$[training].course": course,
          "training.$[training].school": school,
          "training.$[training].conducted_by": conducted_by,
          "training.$[training].date_started": date_started,
          "training.$[training].date_completed": date_completed
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "training._id": trainId }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedTraining) {
      return res.status(404).json({ message: "Course training is not found" });
    }

    res.status(200).json(editedTraining);

});

// Delete Training
const deleteTraining = asyncHandler(async (req, res) => {

    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedTraining = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { training: { _id: itemId } } },
        { new: true }
      );

      res.status(200).json(updatedTraining);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

// approveTrainingS1
const approveTrainingS1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const aprrovedTraining = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "training.$[training].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "training._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedTraining) {
        return res.status(404).json({ message: "Training course is not found" });
      }

      res.status(200).json(aprrovedTraining);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// disApproveTrainingS1
const disApproveTrainingS1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const disAprrovedTraining = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "training.$[training].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "training._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disAprrovedTraining) {
        return res.status(404).json({ message: "Training course is not found" });
      }

      res.status(200).json(disAprrovedTraining);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// approveTrainingG1
const approveTrainingG1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const aprrovedTrainingG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "training.$[training].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "training._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedTrainingG1) {
        return res.status(404).json({ message: "Training course is not found" });
      }

      res.status(200).json(aprrovedTrainingG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// disApproveTrainingG1
const disApproveTrainingG1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const disAprrovedTrainingG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "training.$[training].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "training._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disAprrovedTrainingG1) {
        return res.status(404).json({ message: "Training course is not found" });
      }

      res.status(200).json(disAprrovedTrainingG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// Upload Course Cert
const trainingCourseUpload = async (req, res, next) => {
  const { parentId, trainId } = req.params;

  const member = await Member.findById(parentId);
  // const name = member.last_name.toLowerCase() + '-' + member.first_name.toLowerCase();

  if (!member) {
    res.status(404);
    throw new Error(`{Reservist record not found!${itemId}}`);
  }

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
 
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
    // let user = await User.findById(req.query.userId).orFail();
    // const parentId = '6a89091350132434487d8db1' 
    // const trainId = '6a8cbad29249aa84a641caf3' 
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const coursePdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const coursePdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "training.$[training].coursePdf": coursePdf,
            "training.$[training].isUploaded": true,
            "training.$[training].isGood": false,
            "training.$[training].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "training._id": trainId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

 // updateActiveDuty
const updateActiveDuty = asyncHandler(async (req, res) => {
  const { activeDuty } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`Member not found${id}`);
  }

    const updatedActiveDuty = await Member.findByIdAndUpdate(
      id,
      { $push: { activeDuty: activeDuty } }, // Pushes the object into the activeDuty array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updatedActiveDuty);

});

// editActiveDuty
const editActiveDuty = asyncHandler(async (req, res) => {
  const { parentId, activeId, soNumber, adtUnitAssignment, dateStart, dateEnd } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{ADT course not found!${parentId}}`);
  }
    const editedActiveDutyTraining = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "activeDuty.$[activeDuty].soNumber": soNumber,
          "activeDuty.$[activeDuty].adtUnitAssignment": adtUnitAssignment,
          "activeDuty.$[activeDuty].dateStart": dateStart,
          "activeDuty.$[activeDuty].dateEnd": dateEnd
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "activeDuty._id": activeId }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedActiveDutyTraining) {
      return res.status(404).json({ message: "Active duty training is not found" });
    }

    res.status(200).json(editedActiveDutyTraining);

});

// activeDutyUpload
const activeDutyUpload = async (req, res, next) => {
  const { parentId, activeId } = req.params;
  const member = await Member.findById(parentId);

  if (!member) {
    res.status(404);
    throw new Error(`{Reservist record not found!${itemId}}`);
  }

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const coursePdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const coursePdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "activeDuty.$[activeDuty].coursePdf": coursePdf,
            "activeDuty.$[activeDuty].isUploaded": true,
            "activeDuty.$[activeDuty].isGood": false,
            "activeDuty.$[activeDuty].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activeDuty._id": activeId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

// Add Reservist
const addReservist = asyncHandler(async (req, res) => {

  try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
 
    
    const newMember = await Member.create({
      user: req.user.id,
      user_id: dataArray[0].user_id,
      rescom_id: dataArray[0].rescom_id,
      bde_id: dataArray[0].bde_id,
      motherUnit_id: dataArray[0].motherUnit_id,
      first_name: dataArray[0].first_name,
      middle_name: dataArray[0].middle_name,
      last_name: dataArray[0].last_name,
      name: dataArray[0].name,
      suffix: dataArray[0].suffix,
      rank: dataArray[0].rank,
      afpsn: dataArray[0].afpsn,
      brsvc: dataArray[0].brsvc,
      corps: dataArray[0].corps,
      tasg: dataArray[0].tasg,
      job: dataArray[0].job,
      educ: dataArray[0].educ,
      address: dataArray[0].address,
      address1: dataArray[0].address1,
      city: dataArray[0].city,
      city_code: dataArray[0].city_code,
      region_id: dataArray[0].region_id,
      province_id: dataArray[0].province_id,
      province: dataArray[0].province,
      region: dataArray[0].region,
      zip_code: dataArray[0].zip_code,
      birthdate: dataArray[0].birthdate,
      age: dataArray[0].age,
      birthplace: dataArray[0].birthplace,
      nicknames: dataArray[0].nicknames,
      phone: dataArray[0].phone,
      cellphone: dataArray[0].cellphone,
      sex: dataArray[0].sex,
      email_add: dataArray[0].email_add,
      height: dataArray[0].height,
      weight: dataArray[0].weight,
      build: dataArray[0].build,
      complexion: dataArray[0].complexion,
      scars: dataArray[0].scars,
      health: dataArray[0].health,
      marital_status: dataArray[0].marital_status,
      spouse: dataArray[0].spouse,
      spouse_bday: dataArray[0].spouse_bday,
      marraige: dataArray[0].marraige,
      kaptsa: dataArray[0].kaptsa,
      verify: dataArray[0].verify,
      verified_by: dataArray[0].verified_by,
      designation: dataArray[0].designation,
      designated: dataArray[0].designated,
      reserve_unit: dataArray[0].reserve_unit,
      date_commission: dataArray[0].date_commission,
      source_commission: dataArray[0].source_commission,
      authority: dataArray[0].authority,
      initial_rank_code: dataArray[0].initial_rank_code,
      initial_rank: dataArray[0].initial_rank,
      date_last_promotion: dataArray[0].date_last_promotion,
      level: dataArray[0].level,
      busi_address: dataArray[0].busi_address,
      busi_number: dataArray[0].busi_number,
      nationality: dataArray[0].nationality,
      religion: dataArray[0].religion,
      blood_type: dataArray[0].blood_type,
      sss: dataArray[0].sss,
      gsis: dataArray[0].gsis,
      tin: dataArray[0].tin,
      philhealth: dataArray[0].philhealth,
      eyes: dataArray[0].eyes,
      hair: dataArray[0].hair,
      size_boots: dataArray[0].size_boots,
      size_cap: dataArray[0].size_cap,
      size_bda: dataArray[0].size_bda,
      spoken_dialects: dataArray[0].spoken_dialects,
      skills: dataArray[0].skills,
      emergency_name: dataArray[0].emergency_name,
      emergency_relation: dataArray[0].emergency_relation,
      emergency_address: dataArray[0].emergency_address,
      emergency_number: dataArray[0].emergency_number,
      reservist_status: dataArray[0].reservist_status,
      mobilization_unit: dataArray[0].mobilization_unit,
      db_admin: dataArray[0].db_admin,
      db_admin_rank: dataArray[0].db_admin_rank,
      db_admin_adv: dataArray[0].db_admin_adv,
      db_admin_afos: dataArray[0].db_admin_afos,
      db_admin_post: dataArray[0].db_admin_post,
      photo: dataArray[0].photo,
      photobig: dataArray[0].photobig,
      deceased: dataArray[0].deceased,
      deceased_verified: dataArray[0].deceased_verified,
      oldrank: dataArray[0].oldrank,
      olddate: dataArray[0].olddate,
      highest_schooling: dataArray[0].highest_schooling,
      old_schooling: dataArray[0].old_schooling,
      newtraining: dataArray[0].newtraining,
      oldtraining: dataArray[0].oldtraining,
      grade: dataArray[0].grade,
      PromotionAuthority: dataArray[0].PromotionAuthority,
      rankabbr: dataArray[0].rankabbr,
      exclude: dataArray[0].exclude,
      excluded_by: dataArray[0].excluded_by,
      admin: dataArray[0].admin,
      temp_id: dataArray[0].temp_id,
      complete: dataArray[0].complete,
      score: dataArray[0].score,
      datagrp: dataArray[0].datagrp,
      username: dataArray[0].username,
      passphrase: dataArray[0].passphrase,
      educlevel: dataArray[0].educlevel,
      fos: dataArray[0].fos,
      rotc: dataArray[0].rotc,
      engineer: dataArray[0].engineer,
      engineer_course: dataArray[0].engineer_course,
      date_incorporated: dataArray[0].date_incorporated,
      date_retired: dataArray[0].date_retired,
      unitAssignment: dataArray[0].unitAssignment,
      effec_date_unit: dataArray[0].effec_date_unit,
      unit_authority: dataArray[0].unit_authority,
      afprcen_id: dataArray[0].afprcen_id,
      adt: dataArray[0].adt,
      recorded: dataArray[0].recorded,
      gsc: dataArray[0].gsc
    });

    res.status(201).json({
      message: 'Array data successfully savedxX!'
    });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

//approveActiveDutyS1
const approveActiveDutyS1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const aprrovedActiveDuty = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activeDuty.$[activeDuty].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activeDuty._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedActiveDuty) {
        return res.status(404).json({ message: "Active Duty record is not found" });
      }

      res.status(200).json(aprrovedActiveDuty);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disapproveActiveDutyS1
const disapproveActiveDutyS1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const disaprrovedActiveDuty = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activeDuty.$[activeDuty].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activeDuty._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disaprrovedActiveDuty) {
        return res.status(404).json({ message: "Active Duty record is not found" });
      }

      res.status(200).json(disaprrovedActiveDuty);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//approveActiveDutyG1
const approveActiveDutyG1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const aprrovedActiveDutyG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activeDuty.$[activeDuty].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activeDuty._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedActiveDutyG1) {
        return res.status(404).json({ message: "Active Duty record is not found" });
      }

      res.status(200).json(aprrovedActiveDutyG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//disapproveActiveDutyG1
const disapproveActiveDutyG1 = asyncHandler(async (req, res) => {
    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

      try {      
      const disaprrovedActiveDutyG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activeDuty.$[activeDuty].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activeDuty._id": itemId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disaprrovedActiveDutyG1) {
        return res.status(404).json({ message: "Active Duty record is not found" });
      }

      res.status(200).json(disaprrovedActiveDutyG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

// deleteActiveDuty
const deleteActiveDuty = asyncHandler(async (req, res) => {

    const { parentId, itemId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${itemId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedActiveDuty = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { activeDuty: { _id: itemId } } },
        { new: true }
      );

      res.status(200).json(updatedActiveDuty);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

 // updateMemberDesignation
const updateMemberDesignation = asyncHandler(async (req, res) => {
  const { userDesignation } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`Member not found${id}`);
  }

    const updatedMemberDesignation = await Member.findByIdAndUpdate(
      id,
      { $push: { userDesignation: userDesignation } }, // Pushes the object into the designation array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updatedMemberDesignation);

});

// editDesignation
const editDesignation = asyncHandler(async (req, res) => {
  const { parentId, desigId, so_Number, unitDesignation, date_start, date_end } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{Unit designation not found!${parentId}}`);
  }
    const editedDesignation = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "userDesignation.$[userDesignation].so_Number": so_Number,
          "userDesignation.$[userDesignation].unitDesignation": unitDesignation,
          "userDesignation.$[userDesignation].date_start": date_start,
          "userDesignation.$[userDesignation].date_end": date_end
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "userDesignation._id": desigId }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedDesignation) {
      return res.status(404).json({ message: "Unit designation is not found" });
    }

    res.status(200).json(editedDesignation);

});

// designationUpload
const designationUpload = async (req, res, next) => {
  const { parentId, desigId } = req.params;
  const member = await Member.findById(parentId);

  if (!member) {
    res.status(404);
    throw new Error(`{Reservist record not found!${desigId}}`);
  }

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const designationPdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const designationPdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "userDesignation.$[userDesignation].designationPdf": designationPdf,
            "userDesignation.$[userDesignation].isUploaded": true,
            "userDesignation.$[userDesignation].isGood": false,
            "userDesignation.$[userDesignation].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "userDesignation._id": desigId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

//approveDesignationS1
const approveDesignationS1 = asyncHandler(async (req, res) => {
    const { parentId, desigId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${desigId}}`);
    }

      try {      
      const aprrovedDesignationS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "userDesignation.$[userDesignation].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "userDesignation._id": desigId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedDesignationS1) {
        return res.status(404).json({ message: "Unit designation is not found" });
      }

      res.status(200).json(aprrovedDesignationS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApproveDesignationS1
const disApproveDesignationS1 = asyncHandler(async (req, res) => {
    const { parentId, desigId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${desigId}}`);
    }

      try {      
      const aprrovedDesignationS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "userDesignation.$[userDesignation].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "userDesignation._id": desigId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedDesignationS1) {
        return res.status(404).json({ message: "Unit designation is not found" });
      }

      res.status(200).json(aprrovedDesignationS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//approveDesignationG1
const approveDesignationG1 = asyncHandler(async (req, res) => {
    const { parentId, desigId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${desigId}}`);
    }

      try {      
      const aprrovedDesignationG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "userDesignation.$[userDesignation].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "userDesignation._id": desigId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedDesignationG1) {
        return res.status(404).json({ message: "Unit designation is not found" });
      }

      res.status(200).json(aprrovedDesignationG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApproveDesignationG1
const disApproveDesignationG1 = asyncHandler(async (req, res) => {
    const { parentId, desigId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${desigId}}`);
    }

      try {      
      const aprrovedDesignationS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "userDesignation.$[userDesignation].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "userDesignation._id": desigId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!aprrovedDesignationS1) {
        return res.status(404).json({ message: "Unit designation is not found" });
      }

      res.status(200).json(aprrovedDesignationS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//deleteDesignation
const deleteDesignation = asyncHandler(async (req, res) => {

    const { parentId, desigId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${desigId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedDesignation = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { userDesignation: { _id: desigId } } },
        { new: true }
      );

      res.status(200).json(updatedDesignation);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

 // updateMemberAward
const updateMemberAward = asyncHandler(async (req, res) => {
  const { awards } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`Member not found${id}`);
  }

    const updateMemberAward = await Member.findByIdAndUpdate(
      id,
      { $push: { awards: awards } }, // Pushes the object into the designation array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updateMemberAward);

});

// editAward
const editAward = asyncHandler(async (req, res) => {
  const { parentId, awardId, award_type, authority_from, date_awarded } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{Unit designation not found!${parentId}}`);
  }
    const editedMemberAward = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "awards.$[awards].award_type": award_type,
          "awards.$[awards].authority_from": authority_from,
          "awards.$[awards].date_awarded": date_awarded
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "awards._id": awardId }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedMemberAward) {
      return res.status(404).json({ message: "Military award is not found" });
    }

    res.status(200).json(editedMemberAward);

});

// awardUpload
const awardUpload = async (req, res, next) => {
  const { parentId, awardId } = req.params;
  const member = await Member.findById(parentId);

  if (!member) {
    res.status(404);
    throw new Error(`{Reservist record not found!${awardId}}`);
  }

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const awardPdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const awardPdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "awards.$[awards].awardPdf": awardPdf,
            "awards.$[awards].isUploaded": true,
            "awards.$[awards].isGood": false,
            "awards.$[awards].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "awards._id": awardId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

//approveAwardS1
const approveAwardS1 = asyncHandler(async (req, res) => {
    const { parentId, awardId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${awardId}}`);
    }

      try {      
      const approvedAwardS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "awards.$[awards].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "awards._id": awardId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approvedAwardS1) {
        return res.status(404).json({ message: "Unit designation is not found" });
      }

      res.status(200).json(approvedAwardS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApproveAwardS1
const disApproveAwardS1 = asyncHandler(async (req, res) => {
    const { parentId, awardId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${awardId}}`);
    }

      try {      
      const disApprovedAwardS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "awards.$[awards].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "awards._id": awardId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disApprovedAwardS1) {
        return res.status(404).json({ message: "Award is not found" });
      }

      res.status(200).json(disApprovedAwardS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//approveAwardG1
const approveAwardG1 = asyncHandler(async (req, res) => {
    const { parentId, awardId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${awardId}}`);
    }

      try {      
      const approvedAwardG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "awards.$[awards].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "awards._id": awardId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approvedAwardG1) {
        return res.status(404).json({ message: "Award is not found" });
      }

      res.status(200).json(approvedAwardG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApproveAwardG1
const disApproveAwardG1 = asyncHandler(async (req, res) => {
    const { parentId, awardId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${awardId}}`);
    }

      try {      
      const disApprovedAwardG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "awards.$[awards].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "awards._id": awardId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disApprovedAwardG1) {
        return res.status(404).json({ message: "Award is not found" });
      }

      res.status(200).json(disApprovedAwardG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//deleteAward
const deleteAward = asyncHandler(async (req, res) => {

    const { parentId, awardId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${awardId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedAward = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { awards: { _id: awardId } } },
        { new: true }
      );

      res.status(200).json(updatedAward);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

 // updateMemberDependent
const updateMemberDependent = asyncHandler(async (req, res) => {
  const { dependents } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`Member not found${id}`);
  }

    const updateMemberDependent = await Member.findByIdAndUpdate(
      id,
      { $push: { dependents: dependents } }, // Pushes the object into the designation array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updateMemberDependent);

});

// editDependent
const editDependent = asyncHandler(async (req, res) => {
  const { parentId, dep_id, dep_name, dep_relation, dep_birthdate } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{Unit designation not found!${parentId}}`);
  }
    const editedMemberDependent = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "dependents.$[dependents].dep_name": dep_name,
          "dependents.$[dependents].dep_relation": dep_relation,
          "dependents.$[dependents].dep_birthdate": dep_birthdate
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "dependents._id": dep_id }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedMemberDependent) {
      return res.status(404).json({ message: "Military award is not found" });
    }

    res.status(200).json(editedMemberDependent);

});

// dependentUpload
const dependentUpload = async (req, res, next) => {
  const { parentId, dependentId } = req.params;
  const member = await Member.findById(parentId);

  if (!member) {
    res.status(404);
    throw new Error(`{Reservist record not found!${dependentId}}`);
  }

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const dependentPdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const dependentPdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "dependents.$[dependents].dependentPdf": dependentPdf,
            "dependents.$[dependents].isUploaded": true,
            "dependents.$[dependents].isGood": false,
            "dependents.$[dependents].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "dependents._id": dependentId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

 //approveDependentS1
const approveDependentS1 = asyncHandler(async (req, res) => {
    const { parentId, dependentId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${dependentId}}`);
    }

      try {      
      const approvedDependentS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "dependents.$[dependents].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "dependents._id": dependentId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approvedDependentS1) {
        return res.status(404).json({ message: "Dependent is not found" });
      }

      res.status(200).json(approvedDependentS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApproveDependentS1
const disApproveDependentS1 = asyncHandler(async (req, res) => {
    const { parentId, dependentId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${dependentId}}`);
    }

      try {      
      const disApprovedDependentS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "dependents.$[dependents].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "dependents._id": dependentId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disApprovedDependentS1) {
        return res.status(404).json({ message: "Dependent is not found" });
      }

      res.status(200).json(disApprovedDependentS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

 //approveDependentG1
const approveDependentG1 = asyncHandler(async (req, res) => {
    const { parentId, dependentId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${dependentId}}`);
    }

      try {      
      const approvedDependentS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "dependents.$[dependents].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "dependents._id": dependentId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approvedDependentS1) {
        return res.status(404).json({ message: "Dependent is not found" });
      }

      res.status(200).json(approvedDependentS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApproveDependentG1
const disApproveDependentG1 = asyncHandler(async (req, res) => {
    const { parentId, dependentId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${dependentId}}`);
    }

      try {      
      const disApprovedDependentS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "dependents.$[dependents].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "dependents._id": dependentId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disApprovedDependentS1) {
        return res.status(404).json({ message: "Dependent is not found" });
      }

      res.status(200).json(disApprovedDependentS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//deleteDependent
const deleteDependent = asyncHandler(async (req, res) => {

    const { parentId, dependentId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${dependentId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedDependent = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { dependents: { _id: dependentId } } },
        { new: true }
      );

      res.status(200).json(updatedDependent);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

// updateMemberPromotion
const updateMemberPromotion = asyncHandler(async (req, res) => {
  const { promotions } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member not found');
  }

    const updatedMemberPromotion = await Member.findByIdAndUpdate(
      id,
      { $push: { promotions: promotions } }, // Pushes the object into the education array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updatedMemberPromotion);

});

// editPromotion
const editPromotion = asyncHandler(async (req, res) => {
  const { parentId, promoId, prom_from, prom_to, prom_authority, prom_effectivity, brsvc } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{Unit designation not found!${parentId}}`);
  }
    const editedMemberPromotion = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "promotions.$[promotions].prom_from": prom_from,
          "promotions.$[promotions].prom_to": prom_to,
          "promotions.$[promotions].prom_authority": prom_authority,
          "promotions.$[promotions].prom_effectivity": prom_effectivity,
          "promotions.$[promotions].brsvc": brsvc
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "promotions._id": promoId }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedMemberPromotion) {
      return res.status(404).json({ message: "Promotion is not found" });
    }

    res.status(200).json(editedMemberPromotion);

});

// promotionUpload
const promotionUpload = async (req, res, next) => {
  const { parentId, promotionId } = req.params;

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
 
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const promotionPdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const promotionPdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "promotions.$[promotions].promotionPdf": promotionPdf,
            "promotions.$[promotions].isUploaded": true,
            "promotions.$[promotions].isGood": false,
            "promotions.$[promotions].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "promotions._id": promotionId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

//approvePromotionS1
const approvePromotionS1 = asyncHandler(async (req, res) => {
    const { parentId, promotionId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${promotionId}}`);
    }

      try {      
      const approvedPromotionS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "promotions.$[promotions].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "promotions._id": promotionId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approvedPromotionS1) {
        return res.status(404).json({ message: "Promotion is not found" });
      }

      res.status(200).json(approvedPromotionS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApprovePromotionS1
const disApprovePromotionS1 = asyncHandler(async (req, res) => {
    const { parentId, promotionId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${promotionId}}`);
    }

      try {      
      const disApprovedPromotionS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "promotions.$[promotions].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "promotions._id": promotionId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disApprovedPromotionS1) {
        return res.status(404).json({ message: "Promotion is not found" });
      }

      res.status(200).json(disApprovedPromotionS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//approvePromotionG1
const approvePromotionG1 = asyncHandler(async (req, res) => {
    const { parentId, promotionId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${promotionId}}`);
    }

      try {      
      const approvedPromotionG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "promotions.$[promotions].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "promotions._id": promotionId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approvedPromotionG1) {
        return res.status(404).json({ message: "Promotion is not found" });
      }

      res.status(200).json(approvedPromotionG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//disApprovePromotionG1
const disApprovePromotionG1 = asyncHandler(async (req, res) => {
    const { parentId, promotionId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${promotionId}}`);
    }

      try {      
      const disApprovedPromotionG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "promotions.$[promotions].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "promotions._id": promotionId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disApprovedPromotionG1) {
        return res.status(404).json({ message: "Promotion is not found" });
      }

      res.status(200).json(disApprovedPromotionG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//deletePromotion
const deletePromotion = asyncHandler(async (req, res) => {

    const { parentId, promotionId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${promotionId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedPromotion = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { promotions: { _id: promotionId } } },
        { new: true }
      );

      res.status(200).json(updatedPromotion);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

// updateMemberActivity
const updateMemberActivity = asyncHandler(async (req, res) => {
  const { activities } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member not found');
  }

    const updatedMemberActivity = await Member.findByIdAndUpdate(
      id,
      { $push: { activities: activities } }, // Pushes the object into the education array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updatedMemberActivity);

});

// editActivity
const editActivity = asyncHandler(async (req, res) => {
  const { parentId, activityId, mil_activity, mil_unit, mil_venue, mil_startdate, mil_enddate } = req.body;

  const member = await Member.findById(parentId);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`{Unit designation not found!${parentId}}`);
  }
    const editedMemberActivity = await Member.findByIdAndUpdate(
      { _id: parentId},
      { 
        // Use custom identifier names inside $[ ]
        $set: 
        { 
          "activities.$[activities].mil_activity": mil_activity,
          "activities.$[activities].mil_unit": mil_unit,
          "activities.$[activities].mil_venue": mil_venue,
          "activities.$[activities].mil_startdate": mil_startdate,
          "activities.$[activities].mil_enddate": mil_enddate
        } 
      },
      {
        // Define what those custom identifiers actually match
        arrayFilters: [
          { "activities._id": activityId }
        ]
      },     
      { new: true } // Returns the modified document
    );

    if (!editedMemberActivity) {
      return res.status(404).json({ message: "Military activity not found" });
    }

    res.status(200).json(editedMemberActivity);

});

// activityUpload
const activityUpload = async (req, res, next) => {
  const { parentId, activityId } = req.params;

  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send('No files were uploaded.');
    }

    const validateResult = permitValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require('path');
    const { v4: uuidv4 } = require('uuid');
 
    const uploadDirectory = path.resolve(__dirname, '../filesCourse');
  
    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
        var fileName = uuidv4() + path.extname(image.name);
        var uploadPath = uploadDirectory + '/' + fileName;
        const activityPdf = 'filesCourse/' + fileName;
        image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    const activityPdf = 'filesCourse/' + fileName;

      const savePdfFIle = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { 
            "activities.$[activities].activityPdf": activityPdf,
            "activities.$[activities].isUploaded": true,
            "activities.$[activities].isGood": false,
            "activities.$[activities].isViewed": false
          }
        },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activities._id": activityId }
          ]
        },     
        { new: true } // Returns the modified document
      );

    return res.status(200).json(savePdfFIle).send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
 };

//approveActivityS1
const approveActivityS1 = asyncHandler(async (req, res) => {
    const { parentId, activityId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${activityId}}`);
    }

      try {      
      const approveActivityS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activities.$[activities].isGood": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activities._id": activityId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approveActivityS1) {
        return res.status(404).json({ message: "Military activity is not found" });
      }

      res.status(200).json(approveActivityS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//disApproveActivityS1
const disApproveActivityS1 = asyncHandler(async (req, res) => {
    const { parentId, activityId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${activityId}}`);
    }

      try {      
      const disapproveActivityS1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activities.$[activities].isGood": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activities._id": activityId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disapproveActivityS1) {
        return res.status(404).json({ message: "Military activity is not found" });
      }

      res.status(200).json(disapproveActivityS1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});
 
//approveActivityG1
const approveActivityG1 = asyncHandler(async (req, res) => {
    const { parentId, activityId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${activityId}}`);
    }

      try {      
      const approveActivityG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activities.$[activities].isViewed": true} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activities._id": activityId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!approveActivityG1) {
        return res.status(404).json({ message: "Military activity is not found" });
      }

      res.status(200).json(approveActivityG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//disApproveActivityG1
const disApproveActivityG1 = asyncHandler(async (req, res) => {
    const { parentId, activityId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${activityId}}`);
    }

      try {      
      const disapproveActivityG1 = await Member.findOneAndUpdate(
        { _id: parentId },
        { $set: { "activities.$[activities].isViewed": false} },
        {
          // Define what those custom identifiers actually match
          arrayFilters: [
            { "activities._id": activityId }
          ]
        },     
        { new: true } // Returns the modified document
      );

      if (!disapproveActivityG1) {
        return res.status(404).json({ message: "Military activity is not found" });
      }

      res.status(200).json(disapproveActivityG1);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

//deleteActivity
const deleteActivity = asyncHandler(async (req, res) => {

    const { parentId, activityId } = req.params;
    const member = await Member.findById(parentId);
    
    if (!member) {
      res.status(404);
      throw new Error(`{Reservist record not found!${activityId}}`);
    }

    try {
      
    // Finds the parent document and pulls (removes) the embedded object from the array
      const updatedActivity = await Member.findByIdAndUpdate(
        { _id: parentId },
        { $pull: { activities: { _id: activityId } } },
        { new: true }
      );

      res.status(200).json(updatedActivity);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }

});

// getDataAndUpdate
const getDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }

 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
 
        let branchOfService = '';
        let brsvc = '';
          if(dataArray[0].brsvc === 1) {
            branchOfService = "Philippine Army";
            brsvc = 'PA';
          } 
          if(dataArray[0].brsvc === 2) {
            branchOfService = "Philippine Navy";
            brsvc = 'PN';
          }
          if(dataArray[0].brsvc === 3) {
            branchOfService = "Philippine Marine";
            brsvc = 'PN(M)';
          }
          if(dataArray[0].brsvc === 4) {
            branchOfService = "Philippine Air Force";
            brsvc = 'PAF';
          }
          if(dataArray[0].brsvc === 5) {
            branchOfService = "Technical & Administrative Service";
            brsvc = 'TAS';
          }

      let afos = '';
      let corps = '';
        if(dataArray[0].corps === 1) {
          afos = "JAGS";
          corps = "JAGS";
        } 
        if(dataArray[0].corps === 2) {
          afos = "MC";
          corps = "MC";
        } 
        if(dataArray[0].corps === 3) {
          afos = "NC";
          corps = "NC";
        } 
        if(dataArray[0].corps === 4) {
          afos = "DS";
          corps = "DS";
        } 
        if(dataArray[0].corps === 5) {
          afos = "VC";
          corps = "VC";
        } 
        if(dataArray[0].corps === 6) {
          afos = "CoP";
          corps = "CoP";
        } 
        if(dataArray[0].corps === 7) {
          afos = "MAC";
          corps = "MAC";
        } 
        if(dataArray[0].corps === 8) {
          afos = "COE";
          corps = "COE";
        } 
        if(dataArray[0].corps === 9) {
          afos = "CHS";
          corps = "CHS";
        } 

      let marital_status = '';
        if(dataArray[0].marital_status === 1) {
          marital_status = "Single";
        }
        if(dataArray[0].marital_status === 2) {
          marital_status = "Married";
        }
        if(dataArray[0].marital_status === 3) {
          marital_status = "Separated";
        }
        if(dataArray[0].marital_status === 4) {
          marital_status = "Widowed";
        }

      let sex = '';
        if(dataArray[0].sex === 1) {
          sex = "Male";
        }
        if(dataArray[0].sex === 2) {
          sex = "Female";
        }

      let rank = '';
      let rank_code = '';
        if(dataArray[0].rank === 1) {
          if(dataArray[0].brsvc === 2) {
            rank = "ASN";
            rank_code = "E1";
          }
          rank = "PVT";
          rank_code = "E1";
        }
        if(dataArray[0].rank === 2) {
          if(dataArray[0].brsvc === 2) {
            rank = "SN2";
            rank_code = "E2";
          }
          rank = "PFC";
          rank_code = "E2";
        }
        if(dataArray[0].rank === 3) {
          if(dataArray[0].brsvc === 2) {
            rank = "SN1";
            rank_code = "E3";
          }
          rank = "CPL";
          rank_code = "E3";
        }
        if(dataArray[0].rank === 4) {
          if(dataArray[0].brsvc === 2) {
            rank = "PO3";
            rank_code = "E4";
          }
          rank = "SGT";
          rank_code = "E4";
        }
        if(dataArray[0].rank === 5) {
          if(dataArray[0].brsvc === 2) {
            rank = "PO2";
            rank_code = "E5";
          }
          rank = "SSGT";
          rank_code = "E5";
        }
        if(dataArray[0].rank === 6) {
          if(dataArray[0].brsvc === 2) {
            rank = "PO1";
            rank_code = "E6";
          }
          rank = "TSGT";
          rank_code = "E6";
        }
        if(dataArray[0].rank === 7) {
          if(dataArray[0].brsvc === 2) {
            rank = "CPO";
            rank_code = "E7";
          }
          rank = "MSGT";
          rank_code = "E7";
        }
        if(dataArray[0].rank === 8) {
          rank = "SMSGT";
          rank_code = "E8";
        }
        if(dataArray[0].rank === 9) {
          rank = "CMSGT";
          rank_code = "E9";
        }
        if(dataArray[0].rank === 10) {
          if(dataArray[0].brsvc === 2) {
            rank = "ENS";
            rank_code = "O1";
          }
          rank = "2LT";
          rank_code = "O1";
        }
        if(dataArray[0].rank === 11) {
          if(dataArray[0].brsvc === 2) {
            rank = "LTJG";
            rank_code = "O2";
          }
          rank = "1LT";
          rank_code = "O2";
        }
        if(dataArray[0].rank === 12) {
          if(dataArray[0].brsvc === 2) {
            rank = "LTSG";
            rank_code = "O3";
          }
          rank = "CPT";
          rank_code = "O3";
        }
        if(dataArray[0].rank === 13) {
          if(dataArray[0].brsvc === 2) {
            rank = "LCDR";
            rank_code = "O4";
          }
          rank = "MAJ";
          rank_code = "O4";
        }
        if(dataArray[0].rank === 14) {
          if(dataArray[0].brsvc === 2) {
            rank = "CMDR";
            rank_code = "O5";
          }
          rank = "LTC";
          rank_code = "O5";
        }
        if(dataArray[0].rank === 15) {
          if(dataArray[0].brsvc === 2) {
            rank = "CAPT";
            rank_code = "O6";
          }
          rank = "COL";
          rank_code = "O6";
        }
        if(dataArray[0].rank === 16) {
          if(dataArray[0].brsvc === 2) {
            rank = "COMMO";
            rank_code = "O7";
          }
          rank = "BGEN";
          rank_code = "O7";
        }
        if(dataArray[0].rank === 17) {
          if(dataArray[0].brsvc === 2) {
            rank = "RADM";
            rank_code = "O8";
          }
          rank = "MGEN";
          rank_code = "O8";
        }
        if(dataArray[0].rank === 18) {
          if(dataArray[0].brsvc === 2) {
            rank = "VADM";
            rank_code = "O9";
          }
          rank = "LTGEN";
          rank_code = "O9";
        }
        if(dataArray[0].rank === 19) {
          if(dataArray[0].brsvc === 2) {
            rank = "ADM";
            rank_code = "O10";
          }
          rank = "GEN";
          rank_code = "O10";
        }

  const updatedData = await Member.findByIdAndUpdate(
    { _id: id },
    {
      user_id: dataArray[0].user_id,
      branchOfService: branchOfService,
      rescom_id: dataArray[0].rescom_id,
      bde_id: dataArray[0].bde_id,
      motherUnit_id: dataArray[0].motherUnit_id,
      first_name: dataArray[0].first_name,
      middle_name: dataArray[0].middle_name,
      last_name: dataArray[0].last_name,
      name: dataArray[0].name,
      suffix: dataArray[0].suffix,
      rank: rank,
      rank_code: rank_code,
      afpsn: dataArray[0].afpsn,
      brsvc: brsvc,
      afos: afos,
      corps: corps,
      tasg: dataArray[0].tasg,
      job: dataArray[0].job,
      educ: dataArray[0].educ,
      address: dataArray[0].address,
      address1: dataArray[0].address1,
      city: dataArray[0].city,
      city_code: dataArray[0].city_code,
      region_id: dataArray[0].region_id,
      province_id: dataArray[0].province_id,
      province: dataArray[0].province,
      region: dataArray[0].region,
      zip_code: dataArray[0].zip_code,
      birthdate: dataArray[0].birthdate,
      age: dataArray[0].age,
      birthplace: dataArray[0].birthplace,
      nicknames: dataArray[0].nicknames,
      phone: dataArray[0].phone,
      cellphone: dataArray[0].cellphone,
      sex: sex,
      email_add: dataArray[0].email_add,
      height: dataArray[0].height,
      weight: dataArray[0].weight,
      build: dataArray[0].build,
      complexion: dataArray[0].complexion,
      scars: dataArray[0].scars,
      health: dataArray[0].health,
      marital_status: marital_status,
      spouse: dataArray[0].spouse,
      spouse_bday: dataArray[0].spouse_bday,
      marraige: dataArray[0].marraige,
      kaptsa: dataArray[0].kaptsa,
      verify: dataArray[0].verify,
      verified_by: dataArray[0].verified_by,
      designation: dataArray[0].designation,
      designated: dataArray[0].designated,
      reserve_unit: dataArray[0].reserve_unit,
      date_commission: dataArray[0].date_commission,
      source_commission: dataArray[0].source_commission,
      authority: dataArray[0].authority,
      initial_rank_code: dataArray[0].initial_rank_code,
      initial_rank: dataArray[0].initial_rank,
      date_last_promotion: dataArray[0].date_last_promotion,
      level: dataArray[0].level,
      busi_address: dataArray[0].busi_address,
      busi_number: dataArray[0].busi_number,
      nationality: dataArray[0].nationality,
      religion: dataArray[0].religion,
      blood_type: dataArray[0].blood_type,
      sss: dataArray[0].sss,
      gsis: dataArray[0].gsis,
      tin: dataArray[0].tin,
      philhealth: dataArray[0].philhealth,
      eyes: dataArray[0].eyes,
      hair: dataArray[0].hair,
      size_boots: dataArray[0].size_boots,
      size_cap: dataArray[0].size_cap,
      size_bda: dataArray[0].size_bda,
      spoken_dialects: dataArray[0].spoken_dialects,
      skills: dataArray[0].skills,
      emergency_name: dataArray[0].emergency_name,
      emergency_relation: dataArray[0].emergency_relation,
      emergency_address: dataArray[0].emergency_address,
      emergency_number: dataArray[0].emergency_number,
      reservist_status: dataArray[0].reservist_status,
      mobilization_unit: dataArray[0].mobilization_unit,
      db_admin: dataArray[0].db_admin,
      db_admin_rank: dataArray[0].db_admin_rank,
      db_admin_adv: dataArray[0].db_admin_adv,
      db_admin_afos: dataArray[0].db_admin_afos,
      db_admin_post: dataArray[0].db_admin_post,
      photo: dataArray[0].photo,
      photobig: dataArray[0].photobig,
      deceased: dataArray[0].deceased,
      deceased_verified: dataArray[0].deceased_verified,
      oldrank: dataArray[0].oldrank,
      olddate: dataArray[0].olddate,
      highest_schooling: dataArray[0].highest_schooling,
      old_schooling: dataArray[0].old_schooling,
      newtraining: dataArray[0].newtraining,
      oldtraining: dataArray[0].oldtraining,
      grade: dataArray[0].grade,
      PromotionAuthority: dataArray[0].PromotionAuthority,
      rankabbr: dataArray[0].rankabbr,
      exclude: dataArray[0].exclude,
      excluded_by: dataArray[0].excluded_by,
      admin: dataArray[0].admin,
      temp_id: dataArray[0].temp_id,
      complete: dataArray[0].complete,
      score: dataArray[0].score,
      datagrp: dataArray[0].datagrp,
      username: dataArray[0].username,
      passphrase: dataArray[0].passphrase,
      educlevel: dataArray[0].educlevel,
      fos: dataArray[0].fos,
      rotc: dataArray[0].rotc,
      engineer: dataArray[0].engineer,
      engineer_course: dataArray[0].engineer_course,
      date_incorporated: dataArray[0].date_incorporated,
      date_retired: dataArray[0].date_retired,
      unitAssignment: dataArray[0].unitAssignment,
      effec_date_unit: dataArray[0].effec_date_unit,
      unit_authority: dataArray[0].unit_authority,
      afprcen_id: dataArray[0].afprcen_id,
      adt: dataArray[0].adt,
      recorded: dataArray[0].recorded,
      gsc: dataArray[0].gsc,
      isMain: true
    },
    {
      new: true,
      runValidators: true,
    }
  );

  // res.status(200).json(sex);    
  res.status(200).json(updatedData);    

  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

});

// getEducDataAndUpdate
const getEducDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberEduc = await Member.findByIdAndUpdate(
      id,
      { isEduc: true, $push: { education: { $each: dataArray.map(item => ({ ...item, isGood: item.verified, isViewed: item.verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberEduc);
 } catch (error) {
    console.error('Error updating member education:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 

const getTrainingDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberTraining = await Member.findByIdAndUpdate(
      id,
      { isTraining: true, $push: { training: { $each: dataArray.map(item => ({ ...item, isGood: item.verified, isViewed: item.verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberTraining);
 } catch (error) {
    console.error('Error updating member training:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 
 
const getAdtDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberAdt = await Member.findByIdAndUpdate(
      id,
      { isActiveDuty: true, $push: { activeDuty: { $each: dataArray.map(item => ({ ...item, soNumber: item.so_number, adtUnitAssignment: item.unit_assignment, dateStart: item.date_start, dateEnd: item.date_end, isGood: item.verified, isViewed: item.verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberAdt);
 } catch (error) {
    console.error('Error updating member adt:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 
 
const getDesignationDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberAdt = await Member.findByIdAndUpdate(
      id,
      { isDesignation: true, $push: { userDesignation: { $each: dataArray.map(item => ({ ...item, so_Number: item.so_number, unitDesignation: item.unit_designation, isGood: item.verified, isViewed: item.verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberAdt);
 } catch (error) {
    console.error('Error updating member designation:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 
 
const getAwardDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberAdt = await Member.findByIdAndUpdate(
      id,
      { isAwards: true, $push: { awards: { $each: dataArray.map(item => ({ ...item, award_type: item.award_type, authority_from: item.authority_from, date_awarded: item.date_awarded, isGood: item.verified, isViewed: item.verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberAdt);
 } catch (error) {
    console.error('Error updating member award:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 
 
const getDependentDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberDependent = await Member.findByIdAndUpdate(
      id,
      { isDependents: true, $push: { dependents: { $each: dataArray.map(item => ({ ...item, isGood: item.verified, isViewed: item.verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberDependent);
 } catch (error) {
    console.error('Error updating member dependent:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 
 
const getPromotionDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberPromotion = await Member.findByIdAndUpdate(
      id,
      { isPromotions: true, $push: { promotions: { $each: dataArray.map(item => ({ ...item, isGood: item.prom_verified, isViewed: item.prom_verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberPromotion);
 } catch (error) {
    console.error('Error updating member promotion:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 

const getActivityDataAndUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error('Member was not found');
  }
 try {
    const dataArray = req.body; // Expecting an array of objects in the request body

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
      return res.status(400).json({ error: 'Input must be a non-empty array' });
    }
    const updatedMemberActivity = await Member.findByIdAndUpdate(
      id,
      { isActivities: true, $push: { activities: { $each: dataArray.map(item => ({ ...item, isGood: item.verified, isViewed: item.verifiedg1 })) } } },
      {
        new: true,
        runValidators: true,
      }
    ); 

    res.status(200).json(updatedMemberActivity);
 } catch (error) {
    console.error('Error updating member activity:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }

}); 
 
// getMembers
const getMembers = asyncHandler(async (req, res) => {
  const members = await Member.find().sort({ rank_code: -1, afpsn: 1 });
  if (!members) {
    res.status(500);
    throw new Error('Something went wrong');
  }
  res.status(200).json(members);
});

// deleteReservist
const deleteReservist = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const reservist = await Member.findById(id);

  if (!reservist) {
    res.status(404);
    throw new Error('Reservist not found');
  }
  await Member.findOneAndDelete({_id: id}).exec();
  res.status(200).json({
    message: 'Reservist deleted successfully'
  });
});

 // updateMemberDerogatory
const updateMemberDerogatory = asyncHandler(async (req, res) => {
  const { derogatory } = req.body;

  const { id } = req.params;
  const member = await Member.findById(id);

  // if member doesnt exist
  if (!member) {
    res.status(404);
    throw new Error(`Member not found${id}`);
  }

    const updateMemberDerogatory = await Member.findByIdAndUpdate(
      id,
      { $push: { derogatory: derogatory } }, // Pushes the object into the designation array
      { new: true } // Returns the modified document
    );
    res.status(200).json(updateMemberDerogatory);

});

module.exports = {
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
  approvePromotionG1,
  disApprovePromotionG1,
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
};