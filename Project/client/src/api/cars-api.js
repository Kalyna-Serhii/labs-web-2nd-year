import $api from "@/api/apiInstance";

const carsApi = {
    async getCars() {
        try {
            return await $api.get('/cars');
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive cars: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive cars: ${error.message || error}`);
            }
        }
    },

    async getCarById(carId) {
        try {
            return await $api.get(`/car/${carId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive car: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive car: ${error.message || error}`);
            }
        }
    },

    async createCar(body) {
        try {
            return await $api.post('/car', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to create car: ${error.response.data.message}`);
            } else {
                alert(`Failed to create car: ${error.message || error}`);
            }
        }
    },

    async updateCar(carId, body) {
        try {
            return await $api.patch(`/car/${carId}`, body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to update car: ${error.response.data.message}`);
            } else {
                alert(`Failed to update car: ${error.message || error}`);
            }
        }
    },

    async deleteCar(carId) {
        try {
            return await $api.delete(`/car/${carId}`);
        } catch (error) {
            if (error.response) {
                alert(`Failed to delete car: ${error.response.data.message}`);
            } else {
                alert(`Failed to delete car: ${error.message || error}`);
            }
        }
    }
}

export default carsApi;