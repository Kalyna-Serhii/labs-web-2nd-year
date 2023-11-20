import $api from "@/api/apiInstance";

const usersApi = {
    async getUsers() {
        try {
            return await $api.get('/users');
        } catch (error) {
            alert(`Failed to receive users: ${error.response.data.message || error}`);
        }
    },

    async getUserById(userId) {
        try {
            return await $api.get(`/user/${userId}`);
        } catch (error) {
            alert(`Failed to receive user: ${error.response.data.message || error}`);
        }
    },

    async createUser(body) {
        try {
            return await $api.post('/user', body);
        } catch (error) {
            alert(`Failed to create user: ${error.response.data.message || error}`);
        }
    },

    async updateUser(userId, body) {
        try {
            return await $api.patch(`/user/${userId}`, body);
        } catch (error) {
            alert(`Failed to update user: ${error.response.data.message || error}`);
        }
    },

    async deleteUser(userId) {
        try {
            await $api.delete(`/user/${userId}`);
        } catch (error) {
            alert(`Failed to delete user: ${error.response.data.message || error}`);
        }
    },
};

export default usersApi;