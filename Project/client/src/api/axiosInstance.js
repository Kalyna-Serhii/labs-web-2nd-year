import axios from 'axios';

const createApiInstance = (serverURL) => {
    return axios.create({
        withCredentials: true,
        baseURL: serverURL,
    });
};

const $api = createApiInstance('http://localhost:8082/api');

    async patch(url, body) {
        return await axios.patch(`${this.serverURL}${url}`, body)
            .then(response => response.data);
    }

export default $api;