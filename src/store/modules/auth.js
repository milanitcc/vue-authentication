// import axios from "axios";

const state = {
    user: null,
    posts: null
};

// const getters = {
//     isAuthenticated: state => !!state.user,
//     StatePosts: state => state.posts,
//     StateUser: state => state.user
// };

// const actions = {
//     async Register({dispatch}, from) {
//         await axios.post('register', form);

//         let UserForm = new FormData();
//         UserForm.append('username', Form.username);
//         UserForm.append('password', Form.password);

//         await dispatch('LogIn', UserForm);
//     },

//     async Login({commit}, User) {
//         await axios.post('login', User);

//         await commit('setUser', User.get('username'));
//     },

//     async CreatePost({dispatch}, post) {
//         axios.post('post', post);

//         await dispatch('GetPosts');
//     },

//     async Logout({commit}) {
//         let user = null;
//         commit('logout', user)
//     }
// };

// const mutations = {
//     setUser(state, username) {
//         state.user  = username;
//     },

//     setPosts(state, posts) {
//         state.posts = posts;
//     },

//     Logout(state) {
//         state.user  = null;
//         state.posts = null;
//     }
// };

export default {
    state,
    // getters,
    // actions,
    // mutations
};