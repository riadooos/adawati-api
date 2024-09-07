//box schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const parentSchema = new Schema({
  parentFullname: {
    type: String,
  },
  phone: {
    type: Number,
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
});

const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
