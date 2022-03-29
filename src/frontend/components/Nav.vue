<template>
    <div class="row">
        <div class="col-lg-12">
            <nav class="navbar navbar-light bg-dark justify-content-between fixed-top">
                <div class="menu">
                    <router-link :to="{ name: 'Index' }">Главная</router-link>
                </div>
                <router-link v-if="!isAuth" class="mx-2" :to="{ name: 'Login' }">Login</router-link>
                <a class="mx-2" @click="logout" v-if="isAuth">Выйти</a>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Nav',
    computed: {
        isAuth() {
            return this.$store.getters.accessToken
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            location.reload()
        },
    },
}
</script>

<style scoped>
nav a {
    text-decoration: none;
    margin: 5px 10px;
    cursor: pointer;
}
</style>
