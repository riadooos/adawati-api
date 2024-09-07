import mongoose from "mongoose";
//Generate random numbers for order
const randomTxt = Math.random().toString(36).substring(7).toLocaleUpperCase();
const randomNumbers = Math.floor(1000 + Math.random() * 90000);

//schema

const orderBoxSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      default: randomTxt + randomNumbers,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
    },
    /* articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],*/
    boxId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Box",
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
    },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
    },

    //For admin
    status: {
      type: String,
      default: "encours",
      enum: ["encours", "delivered"],
    },
    deliveredAt: {
      type: Date,
    },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//!compile schema to  model
const OrderBox = mongoose.model("OrderBox", orderBoxSchema);

export default OrderBox;
