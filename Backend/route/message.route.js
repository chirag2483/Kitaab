import express from "express";
import { getMessage } from "../controller/message.controller.js";
const router = express.Router();

router.post("/message", getMessage);

export default router;