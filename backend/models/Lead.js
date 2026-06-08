import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  firstName: String,
  phone: String,
  address: String,
  service: String,
  date: String,
  time: String,
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;