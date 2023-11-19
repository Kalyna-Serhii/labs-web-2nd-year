import $api from "@/api/axiosInstance";

export default {
    state: {
        users: [],
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
    },
    actions: {
        fetchUsers(context) {
            $api.get('/users')
                .then(response => context.commit('setUsers', response.data))
        },
    },
}