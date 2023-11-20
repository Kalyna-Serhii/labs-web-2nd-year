import $api from "@/api/apiInstance";

const authApi = {
    async login(body) {
        try {
            const response = await $api.post('/login', body);
            localStorage.setItem('token', response.accessToken);
            // localStorage.setItem('isAuth', 'true');
            return response;
        } catch (error) {
            alert(`Failed to login: ${error.response.data.message || error}`);
        }
    },
}

export default authApi;