import PackageService from "../service/package-service.js";

const PackageController = {
    async getPackages(req, res) {
        try {
            const packages = await PackageService.getPackages();
            return res.status(200).json(packages);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
}

export default PackageService;