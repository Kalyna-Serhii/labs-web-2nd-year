import express from 'express';
import authMiddleware from "../middlewares/auth-middleware.js";
import carController from "../controllers/car-controller.js";

const router = express.Router();

router.get('/cars', carController.getCars);
router.get('/car/:id', authMiddleware.hasRole(), carController.getCarById);
router.post('/car', authMiddleware.hasRole(), carController.createCar);
router.patch('/car/:id', authMiddleware.hasRole(), carController.updateCar);
router.delete('/car/:id', authMiddleware.hasRole(), carController.deleteCar);
router.post('/car/buy', authMiddleware.onlyAuthorized, carController.buyCar);

export default router;