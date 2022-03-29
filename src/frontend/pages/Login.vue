<template>
    <div class="card mt-5">
        <div class="card-body">
            <form action="">
                <label for="email">Login</label>
                <input type="text" class="form-control" id="email" v-model="form.login" />
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="form.password" />

                <button class="mt-3 btn btn-primary" @click="login">Login</button>

                <div class="mt-3 text-danger" v-if="errors">Incorrect login or password</div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: () => {
        return {
            form: {
                login: null,
                password: null,
            },
            errors: null,
        }
    },
    methods: {
        async login(event) {
            event.preventDefault()
            await this.$store.dispatch('login', this.form)
            await location.reload()
        },
    },
    mounted() {
        if (this.$store.getters.accessToken) {
            this.$router.push({ name: 'Index' })
        }
    },
}
</script>

<style scoped></style>
