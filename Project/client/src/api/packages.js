import axiosInstance from "@/api/axiosInstance";

const packagesAxios = {
    async getPackages() {
        try {
            return await axiosInstance.get('/packages');
        } catch (error) {
            throw new Error(`Failed to receive packages: ${error.response.data.message || error.message}`);
        }
    },

    async getPackageById(packageId) {
        try {
            return await axiosInstance.get(`/package/${packageId}`);
        } catch (error) {
            throw new Error(`Failed to receive package: ${error.response.data.message || error.message}`);
        }
    },

    async createPackage(body) {
        try {
            return await axiosInstance.post('/package', body);
        } catch (error) {
            throw new Error(`Failed to create package: ${error.response.data.message || error.message}`);
        }
    },

    async updatePackage(packageId, body) {
        try {
            return await axiosInstance.patch(`/package/${packageId}`, body);
        } catch (error) {
            throw new Error(`Failed to update package: ${error.response.data.message || error.message}`);
        }
    },

    async deletePackage(packageId) {
        try {
            await axiosInstance.delete(`/package/${packageId}`);
        } catch (error) {
            throw new Error(`Failed to delete package: ${error.response.data.message || error.message}`);
        }
    },
};

export default packagesAxios;