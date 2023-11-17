import axiosInstance from "@/api/axiosInstance";

const usersAxios = {
    async getUsers() {
        try {
            return await axiosInstance.get('/users');
        } catch (error) {
            throw new Error(`Failed to receive users: ${error.message}`);
        }
    },

    async getUserById(userId) {
        try {
            return await axiosInstance.get(`/user/${userId}`);
        } catch (error) {
            throw new Error(`Failed to receive user: ${error.message}`);
        }
    },

    async createUser(body) {
        try {
            return await axiosInstance.post('/user', body);
        } catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    },

    async updateUser(userId, body) {
        try {
            return await axiosInstance.patch(`/user/${userId}`, body);
        } catch (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    },

    async deleteUser(userId) {
        try {
            await axiosInstance.delete(`/user/${userId}`);
        } catch (error) {
            throw new Error(`Failed to delete user: ${error.message}`);
        }
    },
};

export default usersAxios;