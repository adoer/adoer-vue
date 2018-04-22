<template>
  <div id="app">
  <router-view name="header"></router-view>
  <!-- <router-view name="sidebar"></router-view> -->
  <router-view name="content"></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc("100% - 80px");
  padding-top: 80px;
}
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
}
</style>
