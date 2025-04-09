import express from "express";
import Product from "../models/Product.js";
import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/authMiddleware.js";

const router = express.Router();

// @route GET /api/admin/products
// @desc Get all products (Admin Only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
