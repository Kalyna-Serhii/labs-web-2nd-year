import ApiError from '../exceptions/api-error.js';
import carModel from "../models/car-model.js";
import dealService from "./deal-service.js";

const CarService = {
    async getCars() {
        const cars = await carModel.findAll();
        return cars;
    },

    async getCarById(id) {
        const car = await carModel.findOne({where: {id}});
        if (!car) {
            throw ApiError.BadRequest('Car not found');
        }
        return car;
    },

    async createCar(body) {
        const {brand, model, year, price, amount = 1} = body;
        const carAlreadyExists = await carModel.findOne({where: {brand, model, year, price}});
        if (carAlreadyExists) {
            carAlreadyExists.amount += amount;
            await carAlreadyExists.save();
            return carAlreadyExists;
        }
        const newCar = await carModel.create({brand, model, year, price, amount});
        return newCar;
    },

    async updateCar(id, body) {
        const car = await carModel.findOne({where: {id}});
        if (!car) {
            throw ApiError.BadRequest('Car not found');
        }
        const {brand, model, year, price, amount} = body;
        const updatedFields = {};
        updatedFields.brand = brand;
        updatedFields.model = model;
        updatedFields.year = year;
        updatedFields.price = price;
        updatedFields.amount = amount;
        const updatedCar = await car.update(updatedFields);
        return updatedCar;
    },

    async deleteCar(id) {
        const car = await carModel.findOne({where: {id}});
        if (!car) {
            throw ApiError.BadRequest('Car not found');
        }
        await car.destroy();
    },

    async buyCar(token, body) {
        const {carId} = body;
        const car = await carModel.findOne({where: {id: carId}});
        if (!car) {
            throw ApiError.BadRequest('Car not found');
        }
        if(car.amount === 0) {
            throw ApiError.BadRequest('Car is out of stock');
        }
        const price = car.price;
        const deal = dealService.createDeal(token, {carId, price});
        car.amount -= 1;
        await car.save();
        return deal;
    },
};

export default CarService;