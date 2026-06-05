import express from "express";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/create-admin", async (req, res) => {
  try {
    const { email, password } = req.body;

    let admin = await Admin.findOne({ email });

    if (admin) {
      admin.password = password;
      await admin.save();
      return res.json({ message: "Admin updated" });
    }

    admin = new Admin({ email, password });
    await admin.save();

    res.json({ message: "Admin created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating admin" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});

router.post("/change-password", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (admin.password !== oldPassword) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    admin.password = newPassword;
    await admin.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error changing password" });
  }
});

export default router;