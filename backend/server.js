import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Lead from "./models/Lead.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("GM Solar Backend Running");
});

app.post("/api/leads", async (req, res) => {
  try {
    const newLead = new Lead(req.body);

    await newLead.save();

    res.status(201).json({
      message: "Lead saved successfully",
      lead: newLead,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error saving lead",
    });
  }
});

app.get("/api/leads", async (req, res) => {
  try {
    const leads = await Lead.find();

    res.json(leads);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching leads",
    });
  }
});

app.delete("/api/leads/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);

    res.json({
      message: "Client deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error deleting client",
    });
  }
});

app.listen(5050, () => {
  console.log("Server running on port 5050");
});