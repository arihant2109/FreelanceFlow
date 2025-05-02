import { addClientController } from "../controllers/clientController";
import { addProjectController } from "../controllers/projectController";
import { addUserController } from "../controllers/userController";
import express from 'express';

const router = express.Router();

router.post('/addClient',addClientController);
router.post('/addUser',addUserController);
router.post('/addProject',addProjectController);

export default router;  