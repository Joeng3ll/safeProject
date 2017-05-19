<template>
  <div id="app">
    <!--页面内容-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.fade-enter-active, .fade-leave-active*/
    /*trasition all 1s*/

  /*.fade-enter, .fade-leave-active*/
    /*opacity .2*/
</style>
