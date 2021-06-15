import express from "express";
import TemplateParamController from "../controllers/templateParam.controller";

const router = express.Router();

router.get('', async (_req, res) => {
    const controller = new TemplateParamController();
    const response = await controller.getTemplateParameters();
    return res.send(response);
})

router.post('', async (req, res) => {
    const controller = new TemplateParamController();
    const response = await controller.createTemplateParameter(req.body);
    return res.send(response);
})

export default router;
