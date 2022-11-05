<template>
    <h1>{{getBook.name}}</h1>
    <p>
        {{getBook.text}}
    </p>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BookInfo",
    computed: {
        ...mapGetters(['getBook'])
    },
    methods: {
        ...mapActions(['fetchBook'])
    },
    mounted() {
        this.fetchBook(this.$route.params.bookId)
            .then(() => {
                console.log('got')
            })
    }
}
</script>

<style scoped>

</style>