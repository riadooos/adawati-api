import asyncHandler from "express-async-handler";
import School from "../models/School.js";

export const createSchoolCtrl = asyncHandler(async (req, res) => {
  const {
    schoolName,
    password,
    typesSchool,
    nombreEleves,
    wilaya,
    commune,
    address,
    phones,
    email,
    webSite,
    geolocalisation,
    schoolImg,
    boxes,
    parents,
    orders,
    codeParent,
  } = req.body;
  const schoolExist = await School.findOne({ schoolName });
  if (schoolExist) {
    throw new Error("name school exist, please enregisted other name");
  }
  const school = await School.create({
    schoolName,
    password,
    typesSchool,
    nombreEleves,
    wilaya,
    commune,
    address,
    phones,
    email,
    webSite,
    geolocalisation,
    schoolImg,
    boxes,
    parents,
    orders,
    codeParent,
  });
  res.json({
    status: "success",
    message: "new School created successfully",
    school,
  });
});

export const getAllSchoolsCtrl = asyncHandler(async (req, res) => {
  const schools = await School.find();
  res.json({
    status: "success",
    message: "Schools fetched successfully",
    schools,
  });
});

export const getOneSchoolCtrl = asyncHandler(async (req, res) => {
  const school = await School.findById(req.params.id);
  res.json({
    status: "success",
    message: "School fetched successfully",
    school,
  });
});

export const updateSchoolCtrl = asyncHandler(async (req, res) => {
  const {
    schoolName,
    password,
    typesSchool,
    nombreEleves,
    wilaya,
    commune,
    address,
    phones,
    email,
    webSite,
    geolocalisation,
    schoolImg,
    boxes,
    parents,
    orders,
    codeParent,
  } = req.body;
  //update
  const school = await School.findByIdAndUpdate(
    req.params.id,
    {
      schoolName,
      password,
      typesSchool,
      nombreEleves,
      wilaya,
      commune,
      address,
      phones,
      email,
      webSite,
      geolocalisation,
      schoolImg,
      boxes,
      parents,
      orders,
      codeParent,
    },
    { new: true }
  );
  res.json({
    status: "success",
    message: "School updated successfully",
    school,
  });
});

export const deleteSchoolCtrl = asyncHandler(async (req, res) => {
  const school = await School.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "School deleted successfully",
    school,
  });
});
