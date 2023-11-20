import $api from "@/api/apiInstance";

const packagesApi = {
    async getPackages() {
        try {
            return await $api.get('/packages');
        } catch (error) {
            alert(`Failed to receive packages: ${error}`);
        }
    },

    async getPackageById(packageId) {
        try {
            return await $api.get(`/package/${packageId}`);
        } catch (error) {
            alert(`Failed to receive package: ${error}`);
        }
    },

    async createPackage(body) {
        try {
            return await $api.post('/package', body);
        } catch (error) {
            alert(`Failed to create package: ${error}`);
        }
    },

    async updatePackage(packageId, body) {
        try {
            return await $api.patch(`/package/${packageId}`, body);
        } catch (error) {
            alert(`Failed to update package: ${error}`);
        }
    },

    async deletePackage(packageId) {
        try {
            await $api.delete(`/package/${packageId}`);
        } catch (error) {
            alert(`Failed to delete package: ${error}`);
        }
    },
};

export default packagesApi;