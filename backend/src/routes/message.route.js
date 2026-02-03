import express from "express";
import { getAllContancts ,getMessagesByUserId ,sendMessage, getChatPartner} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
const router = express.Router();

router.use(arcjetProtection,protectRoute);

router.get("/contacts", getAllContancts);

router.get("/chats", getChatPartner);

router.get("/:id", getMessagesByUserId);

router.post("/send/:id", sendMessage)

export default router;