import { Router } from 'express';
import * as playground from '../../app/controllers/playground.controller.js';
import { authMiddleware } from '../../app/middlewares/auth.middleware.js';

const router = Router();

router.use(authMiddleware)

router.post('/analyze', playground.analyzeCodeHandler); 
router.post('/comment', playground.commentCodeHandler);
router.post('/complexity', playground.checkComplexityHandler);

export default router;