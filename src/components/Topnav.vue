
<template>
    <section class="top-nav clearfix mdui-container-fluid">
        <div class="left fl"><a class="mdui-icon material-icons">&#xe3c7;</a></div>
        <div class="center fl">
            <router-link to="listen">听</router-link>
            <router-link to="see">看</router-link>
            <router-link to="sing">唱</router-link>
        </div>
        <div class="right fl"><a class="mdui-icon material-icons">&#xe8b6;</a></div>
    </section>
</template>

<script>
export default {
    data () {
        return {};
    }
}
</script> 

<style>
    .top-nav {
        height: 4rem;
        background: #0090ff;
    }
    .top-nav .mdui-icon {
        color: #fff;
        display: inline-block;
        line-height: 48px;
    }
    .top-nav > div {
        height: 100%;
    }
    .top-nav .center a {
        color: #cce9ff;
        display: inline-block;
        width: 32%;
        text-align: center;
        line-height: 36px;
        margin-top: 10px;
    }
    .top-nav .center {
        width: 60%;
    }
    .top-nav .left, .top-nav .right {
        width: 20%;
    }
</style>


