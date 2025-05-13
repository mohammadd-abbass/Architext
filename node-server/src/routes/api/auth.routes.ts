import { Router } from 'express';
import * as auth from '../../app/controllers/auth.controller.js';
import { validate } from '../../app/middlewares/authValidator.middleware.js';
import { loginValidator, registerValidator } from '../../app/validators/auth.validator.js';

const router = Router();

router.post('/signup', registerValidator, validate, auth.signupHandler);
router.post('/login', loginValidator, validate, auth.loginHandler);
router.get('/validate-token', auth.validateTokenHandler);   


export default router;
