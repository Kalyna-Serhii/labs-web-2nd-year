import carService from "../service/car-service.js";

const carController = {
    async getCars(req, res, next) {
        try {
            const cars = await carService.getCars();
            return res.status(200).json(cars);
        } catch (error) {
            next(error);
        }
    },

    async getCarById(req, res, next) {
        try {
            const car = await carService.getCarById(req.params.id);
            return res.status(200).json(car);
        } catch (error) {
            next(error);
        }
    },

    async createCar(req, res, next) {
        try {
            await carService.createCar(req.body);
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },

    async updateCar(req, res, next) {
        try {
            await carService.updateCar(req.params.id, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async deleteCar(req, res, next) {
        try {
            await carService.deleteCar(req.params.id);
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    async buyCar(req, res, next) {
        try {
            await carService.buyCar(req.cookies.accessToken, req.body);
            return res.status(201).send();
        } catch (error) {
            next(error);
        }
    },
};

export default carController;