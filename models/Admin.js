import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  adminname: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//compile the schema to model
const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
