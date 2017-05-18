<template>
  <div class="tab-wrapper">
    <div class="icon-box" :class="colorClass">
      <i class="icon" :class="iconClass"></i>
    </div>
    <p class="tab-name">{{text}}</p>
    <i class="icon-iconfontright-copy icon"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['iconClass', 'text', 'colorClass']
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
      display inline-flex
      justify-content center
      align-items center
      width .8rem
      height .8rem
      margin-left .48rem
      margin-right .22rem
      background red
      border-radius 15%
      &.green
        background rgb(108,182,72)
      &.degreen
        background rgb(41,179,139)
      &.red
        background rgb(237,100,123)
      &.purple
        background rgb(172,108,236)
      &.grew
        background rgb(97,112,144)
      & > .icon
        font-size 22px
        color #fff
    & > .tab-name
      font-size 16px
      display inline-block
    & > .icon
      color #ccc
      position absolute
      right .48rem
</style>
