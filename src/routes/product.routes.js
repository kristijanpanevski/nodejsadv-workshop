import { Router } from "express";
import { ProductController } from "../controllers/product.controllers.js";

export const productsRouter = Router();

productsRouter.get("/", ProductController.getAllProducts);
productsRouter.post("/", ProductController.createProduct);
productsRouter.get("/:id", ProductController.getProductById);

productsRouter.patch("/:id", ProductController.updateProduct);
// studentsRouter.delete("/:id", StudentController.deleteStudent);
