import express from "express";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/create-admin", async (req, res) => {
  try {
    const admin = new Admin({
      email: req.body.email,
      password: req.body.password,
    });

    await admin.save();

    res.json({ message: "Admin created" });
  } catch (error) {
    res.status(500).json(error);
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