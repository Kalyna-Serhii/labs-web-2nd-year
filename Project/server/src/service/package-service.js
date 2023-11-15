import ApiError from '../exceptions/api-error.js';
import packageModel from '../models/package-model.js';

const PackageService = {
    async getPackages() {
        const packages = await packageModel.findAll();
        return packages;
    },

    async createPackage(body) {
        const {id, name, description, price} = body;
        const newPackage = await packageModel.create({id, name, description, price});
        return newPackage;
    },

    async updatePackage(params, body) {
        const {id} = params;
        const oldPackage = await packageModel.findOne({where: {id}});
        if (!oldPackage) {
            throw ApiError.BadRequest('Package not found');
        }
        const {name, description, price} = body;
        const updatedFields = {};
        updatedFields.name = name;
        updatedFields.description = description;
        updatedFields.price = price;
        const updatedPackage = await oldPackage.update(updatedFields);
        return updatedPackage;
    },

    async deletePackage(params) {
        const {id} = params;
        const oldPackage = await packageModel.findOne({where: {id}});
        if (!oldPackage) {
            throw ApiError.BadRequest('Package not found');
        }
        await oldPackage.destroy();
    },
};

export default PackageService;