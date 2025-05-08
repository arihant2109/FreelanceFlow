import { addClient } from '../services/client.js';
import { addProject } from '../services/project.js';
import express from 'express';
const router = express.Router();
import parsePrompt from '../utils/promptParser.js'

// Handle task prompts
router.post('/', async (req, res) => {
    const { prompt } = req.body;
    const parsed = parsePrompt(prompt);

    if (parsed.error) return res.status(400).json({ error: parsed.error });

    const { action, entity, details } = parsed;

    try {
        switch (entity) {
            case 'client':
                if (action === 'create') {
                    const newClient = await addClient(details);
                    return res.status(201).json({ message: 'Client created successfully.', client: newClient });
                }
                break;
            case 'project':
                if (action === 'create') {
                    const newProject = await addProject(details);
                    return res.status(201).json({ message: 'Project created successfully.', project: newProject });
                }
                break;
            default:
                return res.status(400).json({ error: `Unknown entity: ${entity}` });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while processing the task.' });
    }

    res.status(400).json({ error: 'Invalid action or entity.' });
});

export default router;
