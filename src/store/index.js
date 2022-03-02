import axios from "axios";
import { createStore } from 'vuex';

const state = {
    user: null
};

const getters = {
    isAuthenticated: state => !!state.user
};

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    }
};

const actions = {
    async Register(context, form) {
        let data = await axios.post('/auth/register', form);

        console.log(data);

        context.commit('setUser', data.data);
    }
}

export default createStore ({
    state,
    getters,
    actions,
    mutations
})