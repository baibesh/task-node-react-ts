import express from "express";
import ContactController from "../controllers/contact.controller";

const router = express.Router();

router.get('', async (_req, res) => {
    const controller = new ContactController();
    const response = await controller.getContacts();
    return res.send(response);
})

router.post('', async (req, res) => {
    const controller = new ContactController();
    const response = await controller.createContact(req.body);
    return res.send(response);
})

// router.get('/:id', async (req, res) => {
//     const controller = new ContactController();
//     const response = await controller.getContact(req.params.id);
//     if (!response) res.status(404).send({ message: 'Not found' });
//     return res.send(response);
// })

router.get('/generate', async (_req, res) => {
    const controller = new ContactController();
    const response = await controller.generateContacts();
    return res.send(response);
})

export default router;
