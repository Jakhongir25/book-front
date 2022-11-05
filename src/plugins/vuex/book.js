import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null) {

            let categoryUrl = ''

            if (categoryUrl) {
                categoryUrl = '?category=' + categoryId
            }
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8505/api/books' + categoryUrl)
                    .then((response) => {
                        console.log('took books')
                        console.log(response)

                        let books = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch(() => {
                        console.log('There was an error retrieving books')
                        reject()
                    })
            })
        }
    },
    fetchBook(context, bookId) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8505/api/books/' + bookId)
                .then((response) => {
                    console.log('took book')
                    console.log(response)

                    let book = {
                        id: response.data.id,
                        name: response.data.name,
                        description: response.data.description,
                        text: response.data.text,
                        category: response.data.category
                    }

                    context.commit('updateBook', book)
                    resolve()
                })
                .catch(() => {
                    console.log('There was an error retrieving the book')
                    reject()
                })
        })
    },

    mutations: {
        updateBooks(state, books) {
            state.books = books
        },
        updateBook(state, book) {
            state.book = book
        }
    },

    state: {
        books: {
            books: {
                models: [],
                totalItems: 0
            }
        },
        book: {
            id: null,
            name: null,
            description: null,
            text: null,
            category: null
        }
    },

    getters: {
        getBooks(state) {
            return state.books.models
        },
        getBook(state) {
            return state.book
        }
    }
}