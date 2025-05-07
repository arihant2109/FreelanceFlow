import { addClientController } from "../controllers/clientController.js";
import { addProjectController } from "../controllers/projectController.js";
import { addUserController } from "../controllers/userController.js";
import express from 'express';

const router = express.Router();

router.post('/addClient',addClientController);
router.post('/addUser',addUserController);
router.post('/addProject',addProjectController);

export default router;  