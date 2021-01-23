<template>
    <div id="app">
        <Nav></Nav>
        <Home msg="Hello world!" />
    </div>
</template>

<script lang="ts">
    
    import Home from './components/Home.vue';
    import Nav from './components/Nav.vue'

    export default {
        name: "App",
        components: {
            Home,
            Nav
		}
	}
</script>

<style>
</style>
