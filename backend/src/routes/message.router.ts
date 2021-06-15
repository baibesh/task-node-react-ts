import express from "express";
import MessageController from "../controllers/message.controller";

const router = express.Router();

router.get('', async (req, res) => {
    const controller = new MessageController();
    const response = await controller.getMessages();
    return res.send(response);
})

router.post('', async (req, res) => {
    const controller = new MessageController();
    const response = await controller.createMessage(req.body);
    return res.send(response);
})

export default router;
