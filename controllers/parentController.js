import Parent from "../models/Parent.js";
import asyncHandler from "express-async-handler";
import School from "../models/School.js";

export const createParentCtrl = asyncHandler(async (req, res) => {
  const { parentFullname, phone, schoolId } = req.body;
  const schoolFound = await School.findById({ _id: schoolId });
  const parent = await Parent.create({
    parentFullname,
    phone,
    schoolId,
  });
  //push the  parent into school
  schoolFound.parents.push(parent._id);
  //reseave
  await schoolFound.save();
  res.json({
    status: "success",
    message: "Parent created succefully!",
    parent,
  });
});

export const getAllParentsCtrl = asyncHandler(async (req, res) => {
  const parents = await Parent.find();
  res.json({
    status: "success",
    message: "Parents fetched successfully",
    parents,
  });
});

export const getOneParentCtrl = asyncHandler(async (req, res) => {
  const parent = await Parent.findById(req.params.id);
  res.json({
    status: "success",
    message: "Parent fetched successfully",
    parent,
  });
});

export const updateParentCtrl = asyncHandler(async (req, res) => {
  const { parentFullname, phone, schoolId } = req.body;
  //update
  const parent = await Parent.findByIdAndUpdate(
    req.params.id,
    { parentFullname, phone, schoolId },
    { new: true }
  );
  res.json({
    status: "success",
    message: "Parent updated successfully",
    parent,
  });
});

export const deleteParentCtrl = asyncHandler(async (req, res) => {
  const parent = await Parent.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Parent deleted successfully",
    parent,
  });
});
