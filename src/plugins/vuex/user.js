import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/users/auth', data)
                    .then((response) => {
                        console.log('took token')
                        console.log(response)

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.log('There was an error getting the token')
                        reject()
                    })
                    .finally(() => {
                        console.log('This function always works')
                    })
            })
        }
    },

    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        }
    },

    state: {
        token: localStorage.getItem('token')
    },

    getters: {
        getToken(state) {
            return state.token
        }
    }
}