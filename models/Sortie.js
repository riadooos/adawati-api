import mongoose from "mongoose";
const Schema = mongoose.Schema;

//schema

const sortieSchema = Schema(
  {
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
    qte_s: {
      type: Number,
    },
    entree: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Entree",
    },
    box: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Box",
    },
  },
  {
    timestamps: true,
  }
);

//compile schema to  model
const Sortie = mongoose.model("Sortie", sortieSchema);

export default Sortie;
