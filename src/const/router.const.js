import { Router } from "express";
import { productsRouter } from "../routes/product.routes.js";
import { ordersRouter } from "../routes/orders.routes.js";

export const globalRouter = Router();

globalRouter.use("/products", productsRouter);
globalRouter.use("/orders", ordersRouter);
