<template>
    <section class="home">
        <topnav></topnav>
        <router-view></router-view>
        <a @click="doAjax">点我</a>
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
    },
    methods: {
        doAjax() {
            $.ajax({
                url: 'http://127.0.0.1:3000/secret',
                type: 'post',
                success: function(res) {
                    console.log(res);
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }
    }
}
</script>

<style>

</style>

