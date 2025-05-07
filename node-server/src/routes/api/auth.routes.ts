import { Router } from 'express';
import * as auth from '../../app/controllers/auth.controller.js';

const router = Router();

router.post('/signup', auth.loginHandler);
router.post('/login', auth.signupHandler);

export default router;
