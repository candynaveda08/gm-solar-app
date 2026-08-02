import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({
        message: "Please complete all fields.",
      });
    }

    const review = await Review.create({
      name,
      rating,
      comment,
      approved: false,
    });

    res.status(201).json({
      message: "Thank you! Your review was submitted for approval.",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "The review could not be submitted.",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(6);

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "The reviews could not be loaded.",
    });
  }
});
router.get("/all", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "The reviews could not be loaded.",
    });
  }
});

router.patch("/:id/approve", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({
        message: "Review not found.",
      });
    }

    res.json({
      message: "Review approved successfully.",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "The review could not be approved.",
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found.",
      });
    }

    res.json({
      message: "Review deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "The review could not be deleted.",
    });
  }
});

export default router;