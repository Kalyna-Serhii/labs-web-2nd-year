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

    async createDeal(token, body) {
        const {price} = body;
        let {userId, carId, packageId} = body;
        if(carId === '') {
            carId = null;
        }
        if(packageId === '') {
            packageId = null;
        }
        if(!carId && !packageId) {
            throw ApiError.BadRequest('Car id or package id are required');
        }
        if (!userId) {
            const userData = tokenService.validateAccessToken(token);
            userId = userData.id;
        }
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
        const {userId, price, date} = body;
        let {carId, packageId} = body;
        if(carId === '') {
            carId = null;
        }
        if(packageId === '') {
            packageId = null;
        }
        const user = await userModel.findOne({where: {id: userId}});
        if (!user) {
            throw ApiError.BadRequest('User not found');
        }
        if(carId) {
            const car = await carModel.findOne({where: {id: carId}});
            if (!car) {
                throw ApiError.BadRequest('Car not found');
            }
        }
        if(packageId) {
            const Package = await packageModel.findOne({where: {id: packageId}});
            if (!Package) {
                throw ApiError.BadRequest('Package not found');
            }
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