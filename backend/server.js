import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const leadSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  address: String,
  service: String,
  electricBill: String,
  installDate: String,
  installTime: String,
  comments: String,
});

const Lead = mongoose.model("Lead", leadSchema);

app.get("/", (req, res) => {
  res.send("FLF Solar Backend Running");
});

app.post("/api/leads", async (req, res) => {
  try {
    const newLead = new Lead(req.body);

    await newLead.save();

    res.json(newLead);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving lead" });
  }
});

app.get("/api/leads", async (req, res) => {
  try {
    const leads = await Lead.find();

    res.json(leads);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching leads" });
  }
});

app.listen(5050, () => {
  console.log("Server running on port 5050");
});