import serviceService from "../service/service-service.js";

const serviceController = {
    async getServices(req, res, next) {
        try {
            const services = await serviceService.getServices();
            return res.status(200).json(services);
        } catch (error) {
            next(error);
        }
    },

    async createService(req, res, next) {
        try {
            const newService = await serviceService.createService(req.body);
            return res.status(201).json(newService);
        } catch (error) {
            next(error);
        }
    },

    async updateService(req, res, next) {
        try {
            const updatedService = await serviceService.updateService(req.params.id, req.body);
            return res.status(200).json(updatedService);
        } catch (error) {
            next(error);
        }
    },

    async deleteService(req, res, next) {
        try {
            await serviceService.deleteService(req.params.id);
            return res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};

export default serviceController;