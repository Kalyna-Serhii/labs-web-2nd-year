import express from 'express';
import packageController from '../controllers/package-controller.js';

const router = express.Router();

router.get('/packages', packageController.getPackages);
router.post('/package', packageController.createPackage);
router.patch('/package/:id', packageController.updatePackage);
router.delete('/package/:id', packageController.deletePackage);

export default router;
