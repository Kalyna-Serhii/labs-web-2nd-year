import express from 'express';
import authMiddleware from "../middlewares/auth-middleware.js";
import packageController from '../controllers/package-controller.js';

const router = express.Router();

router.get('/packages', packageController.getPackages);
router.get('/package/:id', authMiddleware.hasRole(), packageController.getPackageById);
router.post('/package', authMiddleware.hasRole(), packageController.createPackage);
router.patch('/package/:id', authMiddleware.hasRole(), packageController.updatePackage);
router.delete('/package/:id', authMiddleware.hasRole(), packageController.deletePackage);

export default router;