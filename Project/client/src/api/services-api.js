import $api from "@/api/apiInstance";

const servicesApi = {
    async getServices() {
        try {
            return await $api.get('/services');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async getServiceById(serviceId) {
        try {
            return await $api.get(`/service/${serviceId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async createService(body) {
        try {
            return await $api.post('/service', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async updateService(serviceId, body) {
        try {
            return await $api.patch(`/service/${serviceId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },

    async deleteService(serviceId) {
        try {
            await $api.delete(`/service/${serviceId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    }
}

export default servicesApi;