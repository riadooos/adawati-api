//article schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    nameArticle: {
      type: String,
      required: true,
    },
    refArticle: {
      type: String,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    marqueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Marque",
    },
    qte: {
      type: Number,
    },
    imgArticle: {
      type: String,
    },
    entrees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entree",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
