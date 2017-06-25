<template>
  <header>
    <a @click="show"> test</a>
    <div>{{homemsg}}</div>
  </header>
</template>

<script>
export default {
    name: 'Home',
    data: function() {
        return {
          homemsg: '嘿嘿嘿'
        }
    },
    methods: {
      show: function() {
        alert("哈哈哈");
      }
    }
}
</script>

<style scoped>

</style>

