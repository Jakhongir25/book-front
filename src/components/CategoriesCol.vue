<template>
    <div class="col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
        <div class="list-group">
            <router-link
                v-for="category of getCategories"
                v-bind:key="category.id"
                :to="'/categories/' + category.id" class="list-group-item list-group-item-action"
                exact-active-class="foo"
            >
                {{category.name}}
            </router-link>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoriesCol",
    computed: {
        ...mapGetters(['getCategories'])
    },
    methods: {
        ...mapActions(['fetchCategories'])
    },
    mounted() {
        this.fetchCategories()
        console.log('mounted worked')
    }
}
</script>

<style scoped>
.foo {
    color: darkred;
}

</style>