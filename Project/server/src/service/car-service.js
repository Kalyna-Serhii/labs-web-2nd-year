import ApiError from '../exceptions/api-error.js';
import carModel from "../models/car-model.js";

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
        const {brand, model, year, price, amount} = body;
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
};

export default CarService;