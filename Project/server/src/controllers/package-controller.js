import ApiError from '../exceptions/api-error.js';
import packageService from "../service/package-service.js";

const packageController = {
    async getPackages(req, res, next) {
        try {
            const packages = await packageService.getPackages();
            return res.status(200).json(packages);
        } catch (error) {
            next(error);
        }
    },

    async createPackage(req, res, next) {
        try {
            const newPackage = await packageService.createPackage(req.body);
            return res.status(201).json(newPackage);
        } catch (error) {
            next(error);
        }
    },

    async updatePackage(req, res, next) {
        try {
            const updatedPackage = await packageService.updatePackage(req.params, req.body);
            return res.status(200).json(updatedPackage);
        } catch (error) {
            next(error);
        }
    },

    async deletePackage(req, res, next) {
        try {
            await packageService.deletePackage(req.params);
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};

export default packageController;