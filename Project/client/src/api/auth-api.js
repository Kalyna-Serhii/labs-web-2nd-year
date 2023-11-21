import $api from "@/api/apiInstance";

const authApi = {
    async login(body) {
        try {
            return await $api.post('/login', body);
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },
    async logout() {
        try {
            return await $api.post('/logout', {});
        } catch (error) {
            if (error.response) {
                alert(`Failed to receive users: ${error.response.data.message}`);
            } else {
                alert(`Failed to receive users: ${error.message || error}`);
            }
        }
    },
}

export default authApi;