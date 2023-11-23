import ApiError from '../exceptions/api-error.js';
import dealModel from "../models/deal-model.js";
import userModel from "../models/user-model.js";
import carModel from "../models/car-model.js";
import packageModel from "../models/package-model.js";
import tokenService from "./token-service.js";

const DealService = {
    async getDeals() {
        const deals = await dealModel.findAll();
        return deals;
    },

    async getDealById(id) {
        const deal = await dealModel.findOne({where: {id}});
        if (!deal) {
            throw ApiError.BadRequest('Deal not found');
        }
        return deal;
    },

    async createDeal(body) {
        const {token, carId, packageId, price} = body;
        if(!carId && !packageId) {
            throw ApiError.BadRequest('Car id or package id are required');
        }
        const userData = tokenService.validateAccessToken(token);
        const userId = userData.id;
        const today = new Date();
        const date = today.toISOString().split('T')[0];
        const deal = await dealModel.create({userId, carId, packageId, price, date});
        return deal;
    },

    async updateDeal(id, body) {
        const deal = await dealModel.findOne({where: {id}});
        if (!deal) {
            throw ApiError.BadRequest('Deal not found');
        }
        const {userId, carId, packageId, price, date} = body;
        const user = await userModel.findOne({where: {id: userId}});
        if (!user) {
            throw ApiError.BadRequest('User not found');
        }
        const car = await carModel.findOne({where: {id: carId}});
        if (!car) {
            throw ApiError.BadRequest('Car not found');
        }
        const Package = await packageModel.findOne({where: {id: packageId}});
        if (!Package) {
            throw ApiError.BadRequest('Package not found');
        }
        const updatedFields = {};
        updatedFields.userId = userId;
        updatedFields.carId = carId;
        updatedFields.packageId = packageId;
        updatedFields.price = price;
        updatedFields.date = date;
        const updatedDeal = await deal.update(updatedFields);
        return updatedDeal;
    },

    async deleteDeal(id) {
        const deal = await dealModel.findOne({where: {id}});
        if (!deal) {
            throw ApiError.BadRequest('Deal not found');
        }
        await deal.destroy();
    },
}

export default DealService;