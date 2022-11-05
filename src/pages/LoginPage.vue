<template>
    <form class="col-6 " @submit.prevent="auth">
        <div>{{form.email}}</div>
        <div>{{form.password}}</div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" v-model="form.email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="password" v-model="form.password" class="form-control" id="exampleFormControlInput1" placeholder="000000">
        </div>
        <button type="submit" class="btn btn-primary">Click</button>
    </form>
</template>

<script>
import {mapActions} from "vuex"

export default {
    name: "LoginPage",
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
        }
    },
    methods: {
        ...mapActions(['fetchToken']),
        auth() {
            this.fetchToken(this.form)
                .then(()=> {
                    this.$router.push('/')
                })
        }
    }
}
</script>

<style scoped>

</style>