import express from 'express';
import packageController from '../controllers/package-controller.js';

const router = express.Router();

router.get('/packages', packageController.getPackages);

export default router;
