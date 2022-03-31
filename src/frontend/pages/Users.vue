<template>
    <div class="row mt-lg-5">
        <div class="col-lg-9">
            <div class="card">
                <div class="card-header bg-dark text-light">Управление пользователями</div>
                <div class="card-body">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 5%">ID</th>
                                <th>Имя</th>
                                <th>E-Mail</th>
                                <th style="width: 50%">Токен</th>
                                <th style="width: 15%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users">
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.access_token }}</td>
                                <td style="text-align: right">
                                    <button class="btn btn-danger" @click="deleteUser(user.id)">Удалить</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="card">
                <div class="card-header bg-dark text-light">Добавить пользователя</div>
                <div class="card-body">
                    <form action="">
                        <input type="text" class="form-control" v-model="form.name" placeholder="Введите имя" />
                        <input type="text" class="form-control" v-model="form.email" placeholder="Введите email" />
                        <button class="btn btn-primary mt-2" @click="addUser">Добавить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Users',
    data: () => {
        return {
            form: {
                email: null,
                name: null,
            },
        }
    },
    computed: {
        users() {
            return this.$store.getters.getUsers
        },
    },
    methods: {
        async addUser(event) {
            event.preventDefault()

            try {
                await this.$store.dispatch('addUser', this.form)
                this.form.name = null
                this.form.email = null
                await this.$store.dispatch('loadUsers')
            } catch (e) {
                alert('Ошибка!')
            }
        },
        async deleteUser(id) {
            try {
                await this.$store.dispatch('deleteUser', id)
                await this.$store.dispatch('loadUsers')
            } catch (e) {
                alert('Ошибка!')
            }
        },
    },
    async mounted() {
        await this.$store.dispatch('loadUsers')
    },
}
</script>

<style scoped>
.table {
    table-layout: fixed;
}

.table td {
    white-space: pre-wrap;
}
</style>
