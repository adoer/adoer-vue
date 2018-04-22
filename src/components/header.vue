<template>
<div class="header">
<h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: "header",
  data: function () {
    return {
      msg: 'Header'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  line-height: 1;
  background: #6ab2ec;
  color: #fff;
}
</style>
