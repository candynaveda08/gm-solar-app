import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

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
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error("MongoDB error:", error));

app.get("/", (req, res) => {
  res.send("GM Solar Backend Running");
});

app.post("/api/leads", async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 30000,
      });

      await transporter.sendMail({
        from: `"FLF Solar Website" <${process.env.EMAIL_USER}>`,
        to: "flfpartnersllc@gmail.com",
        replyTo: req.body.email || process.env.EMAIL_USER,
        subject: "New Solar Service Request",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #0b1f3a;">New Customer Request</h2>

            <p>
              A new customer submitted a request through the FLF Solar Services website.
            </p>

            <p>
              <strong>Name:</strong>
              ${req.body.firstName || req.body.name || "Not provided"}
            </p>

            <p>
              <strong>Phone:</strong>
              ${req.body.phone || "Not provided"}
            </p>

            <p>
              <strong>Email:</strong>
              ${req.body.email || "Not provided"}
            </p>

            <p>
              <strong>Address:</strong>
              ${req.body.address || "Not provided"}
            </p>

            <p>
              <strong>Service:</strong>
              ${req.body.service || "Not provided"}
            </p>

            <p>
              <strong>Date:</strong>
              ${req.body.date || "Not provided"}
            </p>

            <p>
              <strong>Time:</strong>
              ${req.body.time || "Not provided"}
            </p>
          </div>
        `,
      });

      console.log("Notification email sent successfully");
    } catch (emailError) {
      console.error("Email notification error:", emailError);
    }

    res.status(201).json({
      message: "Lead saved successfully",
      lead: newLead,
    });
  } catch (error) {
    console.error("Lead saving error:", error);

    res.status(500).json({
      message: "Error saving lead",
    });
  }
});

app.get("/api/leads", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    console.error("Fetching leads error:", error);

    res.status(500).json({
      message: "Error fetching leads",
    });
  }
});

app.delete("/api/leads/:id", async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);

    if (!deletedLead) {
      return res.status(404).json({
        message: "Client not found",
      });
    }

    res.json({
      message: "Client deleted successfully",
    });
  } catch (error) {
    console.error("Deleting client error:", error);

    res.status(500).json({
      message: "Error deleting client",
    });
  }
});

app.post("/api/admin/change-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    if (admin.password !== currentPassword) {
      return res.status(401).json({
        message: "Current password is incorrect",
      });
    }

    admin.password = newPassword;
    await admin.save();

    res.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Changing password error:", error);

    res.status(500).json({
      message: "Error changing password",
    });
  }
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});