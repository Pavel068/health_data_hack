<template>
    <div id="app">
        <div class="container-fluid">
            <Nav></Nav>
        </div>
        <div class="container mt-lg-5">
            <div class="row">
                <div class="col-lg-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './components/Nav'

export default defineComponent({
    name: 'App',
    components: { Nav },
})
</script>
