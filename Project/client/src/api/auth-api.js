import $api from "@/api/apiInstance";

const authApi = {
    async login(body) {
        try {
            return await $api.post('/login', body);
        } catch (error) {
            alert(`Failed to login: ${error.response.data.message || error}`);
        }
    },
}

export default authApi;