import express from 'express';
import authMiddleware from "../middlewares/auth-middleware.js";
import serviceController from '../controllers/service-controller.js';

const router = express.Router();

router.get('/services', serviceController.getServices);
router.get('/service/:id', authMiddleware.hasRole(), serviceController.getServiceById);
router.post('/service', authMiddleware.hasRole(), serviceController.createService);
router.patch('/service/:id', authMiddleware.hasRole(), serviceController.updateService);
router.delete('/service/:id', authMiddleware.hasRole(), serviceController.deleteService);

export default router;