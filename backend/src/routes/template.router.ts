import express from "express";
import TemplateController from "../controllers/template.controller";

const router = express.Router();

router.post('', async (req, res) => {
    const controller = new TemplateController();
    const response = await controller.createTemplate(req.body);
    return res.send(response);
})

router.get('', async (_req, res) => {
    const controller = new TemplateController();
    const response = await controller.getTemplates();
    return res.send(response);
})

export default router;
