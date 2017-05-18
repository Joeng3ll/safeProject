<template>
  <div class="tab-wrapper">
    <div class="icon-box">
      <i class="icon" :class="iconClass"></i>
    </div>
    <p class="tab-name">{{text}}</p>
    <i class="icon-iconfontright-copy icon"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['iconClass', 'text']
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab-wrapper
    position relative
    width 100%
    height 1.17333rem
    line-height 1.17333rem
    background #fff
    font-size 0
    & > .icon-box
      display inline-block
      width .8rem
      height .8rem
      line-height .68rem
      margin-left .48rem
      margin-right .22rem
      background red
      text-align center
      border-radius 15%
      &>.icon
        font-size 22px
        color #fff
    &>.tab-name
      font-size 16px
      display inline-block
    &>.icon
      color #ccc
      position absolute
      right .48rem
</style>
