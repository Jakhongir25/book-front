import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        postImage(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/media_objects', data)
                    .then((response) => {
                        console.log(response)
                        console.log('Added')

                        context.commit('updateImage', response.data)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Error')
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateImage(state, data) {
            state.image = data
        }
    },

    state: {
        image: null
    },

    getters: {
        getImage(state) {
            return state.image
        }
    }
}