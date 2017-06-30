<template>
  <div id="app">
    <transition name="slide">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
#app {
  font-family: Roboto,Noto,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 768px;
  margin: 0 auto;
}
</style>
