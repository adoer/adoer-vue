<template>
<div class="content">
    <ani></ani>
</div>
</template>
<script>
import ani from './animate'
export default {
  name: 'content',
  components: {
    ani
  },
  data: function () {
    return {
      msg: 'content1'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100%;
}
</style>
