//school schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  schoolName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  typesSchool: {
    type: [String],
    enum: ["Creche", "Primaire", "CEM", "Lycee", "Autre"],
    required: true,
  },
  nombreEleves: {
    type: Number,
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
  phones: { type: [String] },
  email: {
    type: String,
  },
  webSite: {
    type: String,
  },
  geolocalisation: {
    type: String,
  },
  schoolLogo: {
    type: String,
  },
  boxes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Box",
    },
  ],
  parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  codeParent: {
    type: Number,
  },
});

const School = mongoose.model("School", schoolSchema);

export default School;
