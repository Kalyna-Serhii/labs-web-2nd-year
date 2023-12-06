import ApiError from '../exceptions/api-error.js';
import serviceModel from '../models/service-model.js';

const ServiceService = {
    async getServices() {
        const services = await serviceModel.findAll();
        return services;
    },

    async getServiceById(id) {
        const service = await serviceModel.findOne({where: {id}});
        if (!service) {
            throw ApiError.BadRequest('Service not found');
        }
        return service;
    },

    async createService(body) {
        const {name, description, price} = body;
        const newService = await serviceModel.create({name, description, price});
        return newService;
    },

    async updateService(id, body) {
        const service = await serviceModel.findOne({where: {id}});
        if (!service) {
            throw ApiError.BadRequest('Service not found');
        }
        const {name, description, price} = body;
        const updatedFields = {};
        updatedFields.name = name;
        updatedFields.description = description;
        updatedFields.price = price;
        const updatedService = await service.update(updatedFields);
        return updatedService;
    },

    async deleteService(id) {
        const service = await serviceModel.findOne({where: {id}});
        if (!service) {
            throw ApiError.BadRequest('Service not found');
        }
        await service.destroy();
    },
};

export default ServiceService;