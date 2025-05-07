import { Router } from 'express';
import * as auth from '../../app/controllers/auth.controller';

const router = Router();

router.post('/signup', auth.loginHandler);
router.post('/login', auth.signupHandler);

export default router;
