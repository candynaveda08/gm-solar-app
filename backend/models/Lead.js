import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  firstName: String,
  phone: String,
  email: String,
  address: String,
  service: String,
  date: String,
  time: String,
  status: {
  type: String,
  default: "New",
},
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;