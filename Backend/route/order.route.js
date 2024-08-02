import express from "express";
import { placeOrder,getOrder } from "../controller/order.controller.js";
const router = express.Router();

router.post("/", placeOrder);
router.get("/", getOrder);

export default router;