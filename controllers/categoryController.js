import asyncHandler from "express-async-handler";
import Category from "../models/Category.js";

export const createCategoryCtrl = asyncHandler(async (req, res) => {
  const { categoryName } = req.body;

  // view if category exist
  const categoryFound = await Category.findOne({ categoryName });
  if (categoryFound) {
    throw new Error("category already exist!");
  }

  //create category
  const category = await Category.create({
    categoryName: categoryName.toLowerCase(),
    user: req.adminAuthId,
    imgCategory: req.file.path,
  });
  res.json({
    status: "success",
    message: "Category created successfully",
    category,
  });
});

export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().populate("articles");
  res.json({
    status: "success",
    message: "Categories fetched successfully",
    categories,
  });
});

export const getOneCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.json({
    status: "success",
    message: "Category fetched successfully",
    category,
  });
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.body;
  //update
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { categoryName },
    { new: true }
  );
  res.json({
    status: "success",
    message: "Category updated successfully",
    category,
  });
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Category deleted successfully",
    category,
  });
});
