import axios from "axios";
import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const state = {
    token: null
};

const getters = {
    isAuthenticated: state => !!state.token
};

const mutations = {
    setUser(state, payload) {
        state.token = payload;
    }
};

const actions = {
    async Register(context, form) {
        let data = await axios.post('/auth/register', form);

        console.log(data);

        context.commit('setUser', data.data);
    },

    async LogIn(context, form) {
        let data = await axios.post('/login', form);

        console.log(data.data.data);

        context.commit('setUser', data.data.data.token);
    }
}

export default createStore ({
    state,
    getters,
    actions,
    mutations,
    plugins: [createPersistedState()]
})