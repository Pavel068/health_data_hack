<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="card mt-lg-5">
                <div class="card-header bg-dark text-light">Авторизация в системе</div>
                <div class="card-body">
                    <form action="">
                        <label for="email">E-Mail</label>
                        <input type="text" class="form-control" id="email" v-model="form.email" />
                        <label for="password">Пароль</label>
                        <input type="password" class="form-control" id="password" v-model="form.password" />

                        <div class="d-flex justify-content-between align-items-center">
                            <button class="mt-3 btn btn-primary" @click="login">Войти</button>
                            <span class="text-danger" v-if="errors">Неверный E-Mail или пароль</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: () => {
        return {
            form: {
                email: null,
                password: null,
            },
            errors: null,
        }
    },
    methods: {
        async login(event) {
            event.preventDefault()
            try {
                await this.$store.dispatch('login', this.form)
                await location.reload()
            } catch (e) {
                this.errors = e
            }
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
