import express from 'express';
import authMiddleware from "../middlewares/auth-middleware.js";
import reviewController from "../controllers/review-controller.js";

const router = express.Router();

router.get('/reviews', reviewController.getReviews);
router.get('/review/:id', authMiddleware.hasRole(), reviewController.getReviewById);
router.post('/review', authMiddleware.onlyAuthorized, reviewController.createReview);
router.patch('/review/:id', authMiddleware.hasRole(), reviewController.updateReview);
router.delete('/review/:id', authMiddleware.hasRole(), reviewController.deleteReview);

export default router;