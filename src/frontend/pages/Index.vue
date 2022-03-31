<template>
    <div class="row mt-lg-5">
        <div class="col-lg-9">
            <div class="card">
                <div class="card-header bg-dark text-light">Подсистема оценивания</div>
                <div class="card-body">
                    <form action="">
                        <label for="">Param 1</label>
                        <input type="text" class="form-control" />
                        <label for="">Param 1</label>
                        <input type="text" class="form-control" />
                        <label for="">Param 1</label>
                        <input type="text" class="form-control" />
                        <label for="">Param 1</label>
                        <input type="text" class="form-control" />

                        <button class="mt-lg-3 btn btn-primary">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <p class="lead">Результат:</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Index',
    data: () => {
        return {}
    },
    methods: {
        async sendData(event) {
            event.preventDefault()

            try {
            } catch (e) {
                alert('Ошибка!')
            }
        },
    },
    async mounted() {},
}
</script>

<style scoped></style>
