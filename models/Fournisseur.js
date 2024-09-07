//fournisseur schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const fournisseurSchema = new Schema({
  fournisseurName: {
    type: String,
    required: true,
  },
  nameContact: {
    type: String,
  },
  wilaya: {
    type: String,
  },
  commune: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  webSite: {
    type: String,
  },
  geolocalisation: {
    type: String,
  },
  imgFournisseur: {
    type: String,
  },
  entrees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Entree",
    },
  ],
});

const Fournisseur = mongoose.model("Fournisseur", fournisseurSchema);

export default Fournisseur;
