import ApiError from '../exceptions/api-error.js';
import reviewModel from '../models/review-model.js';
import userModel from '../models/user-model.js';
import tokenService from "./token-service.js";

const ReviewService = {
    async getReviews() {
        const reviews = await reviewModel.findAll();
        let resultPackages = [];
        for (let i = 0; i < reviews.length; i++) {
            const reviewItem = reviews[i];
            const userData = await userModel.findOne({where: {id: reviewItem.userId}});
            const userName = userData.name;
            resultPackages.push({
                ...reviewItem.get(),
                userName
            });
        }
        return resultPackages;
    },

    async getReviewById(id) {
        const review = await reviewModel.findOne({where: {id}});
        if (!review) {
            throw ApiError.BadRequest('Review not found');
        }
        return review;
    },

    async createReview(token, body) {
        const userData = tokenService.validateAccessToken(token);
        const userId = userData.id;
        const {message} = body;
        const today = new Date();
        const date = today.toISOString().split('T')[0];
        const newReview = await reviewModel.create({userId, message, date});
        return newReview;
    },

    async updateReview(id, body) {
        const review = await reviewModel.findOne({where: {id}});
        if (!review) {
            throw ApiError.BadRequest('Review not found');
        }
        const {message, date} = body;
        const updatedFields = {};
        updatedFields.message = message;
        updatedFields.date = date;
        const updatedReview = await review.update(updatedFields);
        return updatedReview;
    },

    async deleteReview(id) {
        const review = await reviewModel.findOne({where: {id}});
        if (!review) {
            throw ApiError.BadRequest('Review not found');
        }
        await review.destroy();
    },
};

export default ReviewService;