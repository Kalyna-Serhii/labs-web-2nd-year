import axios from "axios";

class AxiosClient {
    constructor(serverURL) {
        this.serverURL = serverURL;
    }

    async get(url) {
        return await axios.get(`${this.serverURL}${url}`)
            .then(response => response.data);
    }

    async post(url, body) {
        return await axios.post(`${this.serverURL}${url}`, body)
            .then(response => response.data);
    }

    async patch(url, body) {
        return await axios.patch(`${this.serverURL}${url}`, body)
            .then(response => response.data);
    }

    async delete(url) {
        return await axios.delete(`${this.serverURL}${url}`)
            .then(response => response.data);
    }
}

const axiosInstance = new AxiosClient('http://localhost:8082/api');

export default axiosInstance;