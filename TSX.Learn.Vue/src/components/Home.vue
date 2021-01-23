<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <b-button v-b-toggle.my-sidebar>Toggle Sidebar</b-button>
        <div class="row">
            <div class="col-md-1">1</div>
            <div class="col-md-1">1</div>
            <div class="col-md-1">1</div>
            <div class="col-md-1">1</div>
            <div class="col-md-1">1</div>
            <div class="col-md-1">1</div>
            <div class="col-md-1">1</div>
        </div>
    </div>
</template>

<script lang="ts">
    
    export default {
        name: "Home",
        props: {
            msg :String
		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
