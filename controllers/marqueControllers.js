import Marque from "../models/Marque.js";
import asyncHandler from "express-async-handler";

export const createMarqueCtrl = asyncHandler(async (req, res) => {
  const { marqueName } = req.body;

  // view if category exist
  const marqueFound = await Marque.findOne({ marqueName });
  if (marqueFound) {
    throw new Error("marque already exist!");
  }

  //create category
  const marque = await Marque.create({
    marqueName: marqueName.toLowerCase(),
    user: req.adminAuthId,
    imgMarque: req.file.path,
  });
  res.json({
    status: "success",
    message: "Marque created successfully",
    marque,
  });
});

export const getAllMarques = asyncHandler(async (req, res) => {
  const marques = await Marque.find();
  res.json({
    status: "success",
    message: "Marques fetched successfully",
    marques,
  });
});

export const getOneMarque = asyncHandler(async (req, res) => {
  const marque = await Marque.findById(req.params.id);
  res.json({
    status: "success",
    message: "Marque fetched successfully",
    marque,
  });
});

export const updateMarque = asyncHandler(async (req, res) => {
  const { marqueName } = req.body;
  //update
  const marque = await Marque.findByIdAndUpdate(
    req.params.id,
    { marqueName },
    { new: true }
  );
  res.json({
    status: "success",
    message: "Marque updated successfully",
    marque,
  });
});

export const deleteMarque = asyncHandler(async (req, res) => {
  const marque = await Marque.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Marque deleted successfully",
    marque,
  });
});
