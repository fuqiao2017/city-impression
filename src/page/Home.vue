<template>
    <section class="home">
        <topnav></topnav>
        <router-view></router-view>
    </section>
</template>

<script>
import Topnav from '../components/Topnav'

export default {
    name: 'home',
    data: function() {
      return {};
    },
    components: {
        Topnav
    }
}
</script>

<style>

</style>

