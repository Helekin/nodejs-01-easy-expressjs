import express from "express";

import {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/add-product", getAddProduct);

router.get("/products", getProducts);

router.post("/add-product", postAddProduct);

router.get("/edit-product/:productId", getEditProduct);

router.post("/edit-product");

export default router;
