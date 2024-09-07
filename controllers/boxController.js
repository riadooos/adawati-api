import Box from "../models/Box.js";
import asyncHandler from "express-async-handler";
import School from "../models/School.js";

export const createBoxCtrl = asyncHandler(async (req, res) => {
  const { designationBox, schoolId, articles } = req.body;
  const schoolFound = await School.findById({ _id: schoolId });
  if (!schoolFound) {
    throw new Error("school don't exist please create a school");
  }
  const box = await Box.create({
    designationBox: designationBox.toLowerCase(),
    schoolId,
    articles,
  });
  // push boxes in school
  schoolFound.boxes.push(box._id);
  // resave school
  await schoolFound.save();
  res.json({
    status: "success",
    message: "Box created successfully",
    box,
  });
});

export const getAllBoxesCtrl = asyncHandler(async (req, res) => {
  const boxes = await Box.find();
  res.json({
    status: "success",
    message: "Boxes fetched successfully",
    boxes,
  });
});

export const getOneBoxCtrl = asyncHandler(async (req, res) => {
  const box = await Box.findById(req.params.id);
  res.json({
    status: "success",
    message: "Box fetched successfully",
    box,
  });
});

export const updateBoxCtrl = asyncHandler(async (req, res) => {
  const { designationBox, schoolId, articles } = req.body;
  //update
  const box = await Box.findByIdAndUpdate(
    req.params.id,
    { designationBox, schoolId, articles },
    { new: true }
  );
  res.json({
    status: "success",
    message: "Box updated successfully",
    box,
  });
});

export const deleteBoxCtrl = asyncHandler(async (req, res) => {
  const box = await Box.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Box deleted successfully",
    box,
  });
});
