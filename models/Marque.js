//marque schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const marqueSchema = new Schema(
  {
    marqueName: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    imgMarque: {
      type: String,
    },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Marque = mongoose.model("Marque", marqueSchema);

export default Marque;
