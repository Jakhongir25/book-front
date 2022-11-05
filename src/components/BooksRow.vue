<template>
    <div class="row">
        <h1>{{bookTitle}}</h1>
        <!--book start-->
        <div v-for="book of getBooks" :key="book.id"
            class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
            <div class="card" style="width: 18rem;">
                <img v-if="book.picture.contentUrl !== undefined"
                    :src="'http://localhost:8505' + book.picture.contentUrl" class="card-img-top" alt="kitob">
                <div class="card-body">
                    <h5 class="card-title">{{book.name}}</h5>
                    <p class="card-text">{{book.description}}</p>
                    <router-link :to="'/book-info/' + book.id" class="btn btn-primary">Read More</router-link>
                </div>
            </div>
        </div>
        <!--book finished-->
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BooksRow",
    computed: {
        ...mapGetters(['getBooks', 'getCategories', 'getToken']),
        bookTitle() {
            return 'Books'
        }
    },
    methods: {
        ...mapActions(['fetchBooks', 'fetchCategories', 'fetchToken'])
    },
    mounted() {
        console.log('The books component has been connected to App.vue')
        this.fetchBooks(this.$route.params.id)
        this.fetchCategories()
        console.log('token', this.getToken)
    },
    watch: {
        '$route.params.id'() {
            console.log("this.$route.params.id" + this.$route.params.id + "exchanged")

            this.fetchBooks(this.$route.params.id)
        }
    }
}
</script>

<style scoped>

</style>