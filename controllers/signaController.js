const asyncHandler = require('express-async-handler');
const Signatory = require('../models/signatoryModel');
const User = require('../models/userModel');

// Create Signatory
const createSignatory = asyncHandler(async (req, res) => {
  const { name, rank, brsvc, schooling, designation } = req.body;
  const signatory = await Signatory.create({ name, rank, brsvc, schooling, designation });

  res.status(201).json(signatory);
});

// Register Signatory
const registerSignatory = asyncHandler(async (req, res) => {
  const {
    pmc,
    branchOfService,
    psychometrician,
    psychometricianDesignation,
    psychometricianLicense,
    psychologist,
    psychologistDesignation,
    psychologistLicense,
    branchChief,
    branchChiefDesignation,
    afpsn
  } = req.body;

  //   Create new Signatory
  const signatory = await Signatory.create({
    pmc,
    branchOfService,
    psychometrician,
    psychometricianDesignation,
    psychometricianLicense,
    psychologist,
    psychologistDesignation,
    psychologistLicense,
    branchChief,
    branchChiefDesignation,
    afpsn
  });

  if (signatory) {
    const {
      _id,
      pmc,
      branchOfService,
      psychometrician,
      psychometricianDesignation,
      psychometricianLicense,
      psychologist,
      psychologistDesignation,
      psychologistLicense,
      branchChief,
      branchChiefDesignation,
      afpsn
    } = signatory;

    res.status(201).json({
      _id,
      pmc,
      branchOfService,
      psychometrician,
      psychometricianDesignation,
      psychometricianLicense,
      psychologist,
      psychologistDesignation,
      psychologistLicense,
      branchChief,
      branchChiefDesignation,
      afpsn
    });
  } else {
    res.status(400);
    throw new Error('Invalid signatory data');
  }
});

// Get Signatory
const getSignatory = asyncHandler(async (req, res) => {
  const signatory = await Signatory.findById(req.params.id);

  if (signatory) {
    const {
      _id,
      pmc,
      branchOfService,
      psychometrician,
      psychometricianDesignation,
      psychometricianLicense,
      psychologist,
      psychologistDesignation,
      psychologistLicense,
      branchChief,
      branchChiefDesignation,
      afpsn,
      signatoryId
    } = signatory;

    res.status(200).json({
      _id,
      pmc,
      branchOfService,
      psychometrician,
      psychometricianDesignation,
      psychometricianLicense,
      psychologist,
      psychologistDesignation,
      psychologistLicense,
      branchChief,
      branchChiefDesignation,
      afpsn,
      signatoryId
    });
  } else {
    res.status(404);
    throw new Error('Signatory not found');
  }
});

// Get Signatories
const getSignatories = asyncHandler(async (req, res) => {
  const signatories = await Signatory.find().sort('-createdAt');
  if (!signatories) {
    res.status(500);
    throw new Error('Something went wrong');
  }
  res.status(200).json(signatories);
});

// Update Signatory
const updateSignatory = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const signatory = await Signatory.findById(id);

  if (signatory) {
    const {
      pmc,
      branchOfService,
      psychometrician,
      psychometricianDesignation,
      psychometricianLicense,
      psychologist,
      psychologistDesignation,
      psychologistLicense,
      branchChief,
      branchChiefDesignation,
      afpsn,
      signatoryId
    } = signatory;

    signatory.pmc = pmc;
    signatory.branchOfService = req.body.branchOfService || branchOfService;
    signatory.psychometrician = req.body.psychometrician || psychometrician;
    signatory.psychometricianDesignation =
      req.body.psychometricianDesignation || psychometricianDesignation;
    signatory.psychometricianLicense =
      req.body.psychometricianLicense || psychometricianLicense;
    signatory.psychologist = req.body.psychologist || psychologist;
    signatory.psychologistDesignation =
      req.body.psychologistDesignation || psychologistDesignation;
    signatory.psychologistLicense =
      req.body.psychologistLicense || psychologistLicense;
    signatory.branchChief = req.body.branchChief || branchChief;
    signatory.branchChiefDesignation =
      req.body.branchChiefDesignation || branchChiefDesignation;
    signatory.afpsn = req.body.afpsn || afpsn;
    signatory.signatoryId = req.body.signatoryId || signatoryId;

    const updatedSignatory = await signatory.save();

    res.status(200).json({
      _id: updatedSignatory._id,
      pmc: updatedSignatory.pmc,
      branchOfService: updatedSignatory.branchOfService,
      psychometrician: updatedSignatory.psychometrician,
      psychometricianDesignation: updatedSignatory.psychometricianDesignation,
      psychometricianLicense: updatedSignatory.psychometricianLicense,
      psychologist: updatedSignatory.psychologist,
      psychologistDesignation: updatedSignatory.psychologistDesignation,
      psychologistLicense: updatedSignatory.psychologistLicense,
      branchChief: updatedSignatory.branchChief,
      branchChiefDesignation: updatedSignatory.branchChiefDesignation,
      afpsn: updatedSignatory.afpsn,
      signatoryId: updatedSignatory.signatoryId
    });
  } else {
    res.status(404);
    throw new Error('Signatory not found');
  }
});

module.exports = {
  createSignatory,
  registerSignatory,
  getSignatory,
  getSignatories,
  updateSignatory
};
