const asyncHandler = require('express-async-handler');
const AbstractQuiz = require('../models/abstractModel');
const imageValidate = require('../utils/imageValidate');

// Add Questionaire
const addQuiz = asyncHandler(async (req, res) => {
  const { set, question, options, correctOption } = req.body;

  //   Create new user
  const quiz = await AbstractQuiz.create({
    set,
    question,
    options,
    correctOption
  });

  if (quiz) {
    const { _id, set, question, options, correctOption } = quiz;

    res.status(201).json({
      _id,
      set,
      question,
      options,
      correctOption
    });
  } else {
    res.status(400);
    throw new Error('Invalid Quiz data');
  }
});

// Get All Questionaires
const getQuestionaires = asyncHandler(async (req, res) => {
  //const quizzes = await Quiz.find().sort('-createdAt');
  const quizzes = await AbstractQuiz.find().sort('-createdAt');
  if (!quizzes) {
    res.status(500);
    throw new Error('Something went wrong');
  }
  res.status(200).json(quizzes);
});

// Get single Questionaire
const getQuestionaire = asyncHandler(async (req, res) => {
  const questionaire = await AbstractQuiz.findById(req.params.id);
  // if product doesnt exist
  if (!questionaire) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.status(200).json(questionaire);
});

// Get All Questions
const getQuestions = asyncHandler(async (req, res) => {
  //const quizzes = await Quiz.find().sort('-createdAt');
  const set = req.params.set.toLowerCase();

  //const slug = req.params.slug.toLowerCase();
  const quizzes = await AbstractQuiz.find({ set: set }).sort('-createdAt');
  if (!quizzes) {
    res.status(500);
    throw new Error('Something went wrong');
  }

  const shuffledQuestions = quizzes.sort(() => Math.random() - 0.5);
  res.status(200).json(shuffledQuestions);
});

// Delete Questionaire
const deleteQuestionaire = asyncHandler(async (req, res) => {
  const question = AbstractQuiz.findById(req.params.id);

  if (!question) {
    res.status(404);
    throw new Error('Questionaire not found');
  }

  await question.deleteOne();
  res.status(200).json({
    message: 'Questionaire deleted successfully'
  });
});

// Get selected Questionaires
const updateQuestionaire = asyncHandler(async (req, res) => {
  const { quiz } = req.body;
  //const quizzes = await Quiz.find().sort('-createdAt');
  const updatedquizzes = await AbstractQuiz.find({ set: quiz }).sort(
    '-createdAt'
  );
  if (!updatedquizzes) {
    res.status(500);
    throw new Error('Something went wrong');
  }
  res.status(200).json(updatedquizzes);
  //res.send(quiz);
});

// @desc  Update Abstract Questionaires
// @route PATCH /api/abstractQuiz/:id
// @access Private/Psychologist
const updateAbstractQuestion = asyncHandler(async (req, res) => {
  const { id, set, question, options, correctOption, points, instruction } =
    req.body;

  //const { id } = req.params;
  const quiz = await AbstractQuiz.findById(id);

  // if quiz doesnt exist
  if (!quiz) {
    res.status(404);
    throw new Error('Resource not found');
  }

  // const updatedQuiz = await AbstractQuiz.save();
  const updatedQuiz = await AbstractQuiz.findByIdAndUpdate(
    { _id: id },
    {
      set,
      question,
      options,
      correctOption,
      points,
      instruction
    },
    {
      new: true,
      runValidators: true
    }
  );
  res.status(200).json(updatedQuiz);
});

// absImageUpload
const abstractImageUpload = async (req, res, next) => {
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
    const uploadDirectory = path.resolve(
      __dirname,
      '../../frontend',
      'public',
      'images',
      '121920181320'
    );

    //console.log(req.query.userId);
    let abstractQuiz = await AbstractQuiz.findById(req.query.absId).orFail();

    let imagesTable = [];
    // if (Array.isArray(req.files.images)) {
    //   res.send('You sent' + req.files.images.length + ' images');
    // } else {
    //   res.send('You sent only one image.');
    // }

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
      // console.log(path.extname(image.name));
      // console.log(uuidv4());
      var fileName = uuidv4() + path.extname(image.name);
      var uploadPath = uploadDirectory + '/' + fileName;
      abstractQuiz.imageQuestion = '/images/121920181320/' + fileName;
      image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    await abstractQuiz.save();
    return res.send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
};

// abstractImageRemove
const abstractImageRemove = async (req, res, next) => {
  try {
    const abstractQuiz = await AbstractQuiz.findById(req.query.absId).orFail();

    abstractQuiz.imageQuestion = '';
    await abstractQuiz.save();
    return res.send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
};

//updateImageQuestion
const updateImageQuestion = async (req, res, next) => {
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
    const uploadDirectory = path.resolve(
      __dirname,
      '../../frontend',
      'public',
      'images',
      '121920181320'
    );

    //console.log(req.query.userId);
    let abstractQuiz = await AbstractQuiz.findById(req.query.absId).orFail();

    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
      var fileName = uuidv4() + path.extname(image.name);
      var uploadPath = uploadDirectory + '/' + fileName;
      abstractQuiz.imageOptions.push('/images/121920181320/' + fileName);
      image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    await abstractQuiz.save();
    return res.send({ message: 'Option Image file uploaded!' });
  } catch (err) {
    next(err);
  }
};

// abstractOptionImageRemove
const abstractOptionImageRemove = async (req, res, next) => {
  const optionIndex = req.query.optionId;
  const questionId = req.query.absId;
  try {
    const abstractQuiz = await AbstractQuiz.findById(questionId).orFail();

    abstractQuiz.imageOptions[optionIndex] = null;
    await abstractQuiz.save();
    return res.send({ message: 'Files uploaded!' });
  } catch (err) {
    next(err);
  }
};

//updateOptionImage
const updateOptionImage = async (req, res, next) => {
  const optionIndex = req.query.optionId;

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
    const uploadDirectory = path.resolve(
      __dirname,
      '../../frontend',
      'public',
      'images',
      '121920181320'
    );

    //console.log(req.query.userId);
    let abstractQuiz = await AbstractQuiz.findById(req.query.absId).orFail();

    let imagesTable = [];

    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
    } else {
      imagesTable.push(req.files.images);
    }

    for (let image of imagesTable) {
      var fileName = uuidv4() + path.extname(image.name);
      var uploadPath = uploadDirectory + '/' + fileName;
      abstractQuiz.imageOptions[optionIndex] =
        '/images/121920181320/' + fileName;
      image.mv(uploadPath, function (err) {
        if (err) {
          return res.status(500).send(err);
        }
      });
    }
    await abstractQuiz.save();
    return res.send({ message: 'Option Image file uploaded!' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addQuiz,
  getQuestionaires,
  getQuestionaire,
  deleteQuestionaire,
  updateQuestionaire,
  getQuestions,
  updateAbstractQuestion,
  abstractImageUpload,
  abstractImageRemove,
  updateImageQuestion,
  abstractOptionImageRemove,
  updateOptionImage
};
