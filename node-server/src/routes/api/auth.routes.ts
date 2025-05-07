import { Router } from 'express';
import * as auth from '../../app/controllers/auth.controller.js';

const router = Router();

router.post('/signup', auth.signupHandler);
router.post('/login', auth.loginHandler);

export default router;
