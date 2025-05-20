import { Router } from 'express';
import * as playground from '../../app/controllers/playground.controller.js';
import { authMiddleware } from '../../app/middlewares/auth.middleware.js';

const router = Router();

router.post('/analyze', authMiddleware, playground.analyzeCodeHandler); 
router.post('/comment', authMiddleware, playground.commentCodeHandler);
router.post('/complexity', authMiddleware, playground.checkComplexityHandler);

export default router;