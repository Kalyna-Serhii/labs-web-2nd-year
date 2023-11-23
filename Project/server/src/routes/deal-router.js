import express from 'express';
import authMiddleware from "../middlewares/auth-middleware.js";
import dealController from '../controllers/deal-controller.js';

const router = express.Router();

router.get('/deals', authMiddleware.hasRole(), dealController.getDeals);
router.get('/deal/:id', authMiddleware.hasRole(), dealController.getDealById);
router.post('/deal', authMiddleware.hasRole(), dealController.createDeal);
router.patch('/deal/:id', authMiddleware.hasRole(), dealController.updateDeal);
router.delete('/deal/:id', authMiddleware.hasRole(), dealController.deleteDeal);

export default router;