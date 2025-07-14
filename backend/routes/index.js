import { addClientController, fetchClientController } from "../controllers/clientController.js";
import { addProjectController ,fetchProjectController} from "../controllers/projectController.js";
import { addUserController } from "../controllers/userController.js";
import promptparser from '../controllers/prompt.js';


import express from 'express';

const router = express.Router();

router.post('/addClient',addClientController);
router.post('/addUser',addUserController);
router.post('/addProject',addProjectController);
router.get('/fetchProjects',fetchProjectController);
router.use('/prompt',promptparser);

router.get('/fetchClients',fetchClientController);
export default router;  