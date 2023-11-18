import express from 'express';
import authMiddleware from "../middlewares/auth-middleware.js";
import authController from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware.onlyAuthorized, authController.logout);
router.get('/refresh', authMiddleware.onlyAuthorized, authController.refresh);

export default router;