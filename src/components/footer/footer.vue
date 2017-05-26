<template>
  <footer class="navigator">
    <section class="navigator-item">
      <router-link to="/home" class="box">
        <i class="icon icon-shouye-shouye"></i>
        <p class="text">首页</p>
      </router-link>
    </section>
    <section class="navigator-item">
      <router-link to="/communication" class="box">
        <i class="icon icon-tongxun"></i>
        <p class="text">通讯</p>
      </router-link>
    </section>
    <section class="navigator-item">
      <router-link to="/interlocution" class="box">
        <i class="icon icon-wenda"></i>
        <p class="text">问答</p>
      </router-link>
    </section>
    <section class="navigator-item">
      <router-link to="/personal" class="box">
        <i class="icon icon-wode"></i>
        <p class="text">我</p>
      </router-link>
    </section>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .navigator
    position fixed
    bottom 0
    left 0
    width 100%
    height 1.306667rem
    background rgb(58, 153, 240)
    font-size 0
    transition all .3s
    & > .navigator-item
      display inline-flex
      justify-content center
      -webkit-justify-content center
      align-items center
      -webkit-align-items center
      width 25%
      height 100%
      text-align center
      color #fff
      & > .box
        color #fff
        &.router-link-exact-active
          color aqua
        &.router-link-active
          color rgb(75, 248, 249)
        & > .icon
          font-size .5866667rem
        & > .text
          margin-top .1rem
          font-size 12px
</style>
