import ApiError from '../exceptions/api-error.js';
import {sequelize} from '../database/database.config.js';
import packageModel from '../models/package-model.js';
import serviceModel from "../models/service-model.js";
import servicePackageModel from "../models/servicePackage-model.js";

const PackageService = {
    async getPackages() {
        const packages = await packageModel.findAll();
        const packageServiceFromDb = await servicePackageModel.findAll();
        let resultPackages = [];
        for (let i = 0; i < packages.length; i++) {
            const packageItem = packages[i];
            const packageServices = packageServiceFromDb.filter(item => item.PackageId === packageItem.id);
            const services = await Promise.all(packageServices.map(async service => {
                const serviceDetails = await serviceModel.findOne({where: {id: service.ServiceId}});
                return serviceDetails ? serviceDetails.get() : null;
            }));
            resultPackages.push({
                ...packageItem.get(),
                services
            });
        }
        return resultPackages;
    },


    async getPackageById(id) {
        const Package = await packageModel.findOne({where: {id}});
        if (!Package) {
            throw ApiError.BadRequest('Package not found');
        }
        const packageServicesIds = await servicePackageModel.findAll({where: {PackageId: Package.id}});
        const services = await Promise.all(packageServicesIds.map(async service => {
            const serviceDetails = await serviceModel.findOne({where: {id: service.ServiceId}});
            return serviceDetails ? serviceDetails.get() : null;
        }));
        const resultPackage = {
            ...Package.get(),
            services
        };
        return resultPackage;
    },

    async createPackage(body) {
        const {id, name, description, price, idServices} = body;
        const newPackage = await packageModel.create({id, name, description, price});
        const services = await serviceModel.findAll({where: {id: idServices}});
        await newPackage.addServices(services);
        return newPackage;
    },

    async updatePackage(id, body) {
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

    async deletePackage(id) {
        const Package = await packageModel.findOne({where: {id}});
        if (!Package) {
            throw ApiError.BadRequest('Package not found');
        }
        await Package.destroy();
    },
};

export default PackageService;