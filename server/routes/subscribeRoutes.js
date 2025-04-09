import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// @route POST /api/subscribe
// @desc Handle Newsletter subscription
// @access Public
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if email is already subscribed
    let subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Create a new subscriber
    subscriber = new Subscriber({email});
    await subscriber.save();

    res
      .status(201)
      .json({ message: "Successfully Subscribed to the newsletter" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
