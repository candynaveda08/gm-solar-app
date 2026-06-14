import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Lead from "./models/Lead.js";
import adminRoutes from "./routes/adminRoutes.js";
import Admin from "./models/Admin.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.post("/api/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

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

app.delete("/api/leads/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting client" });
  }
});
app.post("/api/admin/change-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (admin.password !== currentPassword) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    admin.password = newPassword;
    await admin.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error changing password" });
  }
});

app.listen(5050, () => {
  console.log("Server running on port 5050");
});