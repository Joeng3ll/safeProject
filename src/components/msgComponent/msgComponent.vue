<template>
  <div class="msgCmp-wrapper">
    <router-link to="/announce">
      <i class="icon icon-xiaoxi1"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    props: ['msgCount']
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .msgCmp-wrapper
    .icon
      color #fff
      font-size .5866667rem
</style>
