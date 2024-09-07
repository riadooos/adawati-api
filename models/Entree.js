import mongoose from "mongoose";
const Schema = mongoose.Schema;

//schema
const entreeSchema = Schema(
  {
    bon_Entree: {
      type: String,
    },
    article_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
    qte_e: {
      type: Number,
    },
    pu_e: {
      type: Number,
    },
    pu_v: {
      type: Number,
    },
    fournisseur_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fournisseur",
    },
  },
  {
    timestamps: true,
  }
);

//compile schema to  model
const Entree = mongoose.model("Entree", entreeSchema);

export default Entree;
