<template>
  <header class="header-wrapper">
    <router-link to="/personal">
      <i class="icon-left icon-msnui-menu-left"></i>
    </router-link>
    <p class="text">{{text}}</p>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['text']
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    position relative
    width 100%
    height 1.17333rem
    line-height 1.17333rem
    background rgb(58, 153, 240)
    text-align center
    color #fff
    & > a
      color #fff
      & > .icon-left
        position absolute
        left .48rem
    & > .text
      font-size 18px
      display inline
</style>
