import $api from "@/api/apiInstance";

const packagesApi = {
    async getPackages() {
        try {
            return await $api.get('/packages');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async getPackageById(packageId) {
        try {
            return await $api.get(`/package/${packageId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async createPackage(body) {
        try {
            return await $api.post('/package', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async updatePackage(packageId, body) {
        try {
            return await $api.patch(`/package/${packageId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async deletePackage(packageId) {
        try {
            await $api.delete(`/package/${packageId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },
};

export default packagesApi;