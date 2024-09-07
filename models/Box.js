//box schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const boxSchema = new Schema(
  {
    designationBox: {
      type: String,
    },
    schoolId: {
      type: String,
      ref: "School",
      required: true,
    },
    articles: [
      {
        type: Object,
        required: true,
      },
    ],
    totalPrice: {
      type: Number,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
);

const Box = mongoose.model("Box", boxSchema);

export default Box;
