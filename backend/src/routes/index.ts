import express from 'express';
import WelcomeController from "../controllers/welcome";
import ContactRouter from './contact.router';
import TemplateRouter from './template.router';
import TemplateParamRouter from './template-params.router'
import MessageRouter from './message.router'

const router = express.Router();

router.get('/', async (_req, res) => {
    const controller = new WelcomeController();
    const response = await controller.getMessage();
    return res.send(response);
})

router.use('/contact', ContactRouter);
router.use('/template', TemplateRouter);
router.use('/template-param', TemplateParamRouter)
router.use('/message', MessageRouter);

export default router;
