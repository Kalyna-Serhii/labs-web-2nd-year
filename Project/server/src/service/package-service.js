import ApiError from '../exceptions/api-error.js';
import packageModel from '../models/package-model.js';
import serviceModel from "../models/service-model.js";
import servicePackageModel from "../models/servicePackage-model.js";
import dealService from "./deal-service.js";

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
        const {name, description, price, idServices} = body;
        const newPackage = await packageModel.create({name, description, price});
        const services = await serviceModel.findAll({where: {id: idServices}});
        await newPackage.addServices(services);
        const resultPackage = {
            ...newPackage.get(),
            services
        };
        return resultPackage;
    },

    async updatePackage(id, body) {
        const Package = await packageModel.findOne({where: {id}});
        if (!Package) {
            throw ApiError.BadRequest('Package not found');
        }
        const {name, description, price, idServices} = body;
        const updatedFields = {};
        updatedFields.name = name;
        updatedFields.description = description;
        updatedFields.price = price;
        const updatedPackage = await Package.update(updatedFields);
        const services = await serviceModel.findAll({where: {id: idServices}});
        await updatedPackage.setServices(services);
        const resultPackage = {
            ...updatedPackage.get(),
            services
        };
        return resultPackage;
    },

    async deletePackage(id) {
        const Package = await packageModel.findOne({where: {id}});
        if (!Package) {
            throw ApiError.BadRequest('Package not found');
        }
        await Package.destroy();
    },

    async buyPackage(token, body) {
        const {packageId} = body;
        const Package = await packageModel.findOne({where: {id: packageId}});
        if (!Package) {
            throw ApiError.BadRequest('Package not found');
        }
        const price = Package.price;
        const deal = dealService.createDeal({token, packageId, price});
        return deal;
    },
};

export default PackageService;