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

export default router;