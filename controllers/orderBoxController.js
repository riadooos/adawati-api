import OrderBox from "../models/OrderBox.js";
import asyncHandler from "express-async-handler";
import School from "../models/School.js";

export const createOrderBoxCtrl = asyncHandler(async (req, res) => {
  const {
    orderNumber,
    totalPrice,
    boxId,
    parentId,
    schoolId,
    status,
    deliveredAt,
  } = req.body;
  const schoolFound = await School.findById({ _id: schoolId });
  if (!schoolFound) {
    throw new Error("School not found, please create school first");
  }

  const orderBox = await OrderBox.create({
    orderNumber,
    totalPrice,
    boxId,
    parentId,
    schoolId,
    status,
    deliveredAt,
  });
  // push orderBox._id in orders of our school
  schoolFound.orders.push(orderBox._id);
  //resave
  await schoolFound.save();

  res.json({
    status: "success",
    message: "new orderBox was created",
    orderBox,
  });
});

export const getAllOrderBoxesCtrl = asyncHandler(async (req, res) => {
  const orderBoxes = await OrderBox.find();
  res.json({
    status: "success",
    message: "OrderBoxes fetched successfully",
    orderBoxes,
  });
});

export const getOneOrderBoxCtrl = asyncHandler(async (req, res) => {
  const orderBox = await OrderBox.findById(req.params.id);
  res.json({
    status: "success",
    message: "OrderBox fetched successfully",
    orderBox,
  });
});

export const updateOrderBoxCtrl = asyncHandler(async (req, res) => {
  const {
    orderNumber,
    totalPrice,
    boxId,
    parentId,
    schoolId,
    status,
    deliveredAt,
  } = req.body;
  //update
  const orderBox = await OrderBox.findByIdAndUpdate(
    req.params.id,
    {
      orderNumber,
      totalPrice,
      boxId,
      parentId,
      schoolId,
      status,
      deliveredAt,
    },
    { new: true }
  );
  res.json({
    status: "success",
    message: "OrderBox updated successfully",
    orderBox,
  });
});

export const deleteOrderBoxCtrl = asyncHandler(async (req, res) => {
  const orderBox = await OrderBox.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "OrderBox deleted successfully",
    orderBox,
  });
});
