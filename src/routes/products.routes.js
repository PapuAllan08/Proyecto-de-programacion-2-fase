import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  getProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/productos", getProducts);

router.get("/productos/:ID_producto", getProduct);

router.post("/productos", createProduct);

router.put("/productos/:ID_producto", updateProduct);

router.delete("/productos/ID_producto", deleteProduct);

export default router;
