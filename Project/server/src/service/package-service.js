import PackageModel from '../models/package-model.js';

const PackageService = {
    async getPackages() {
        const packages = await PackageModel.findAll();
        return packages;
    },
};

export default PackageService;