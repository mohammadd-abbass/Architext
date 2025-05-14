import { authMiddleware } from '../../app/middlewares/auth.middleware.js';
import * as ai from '../../app/controllers/ai.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/generate-config', authMiddleware, ai.generateConfigHandler);

export default router;