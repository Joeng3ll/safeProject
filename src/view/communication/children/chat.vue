<template>
  <div class="chat-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <router-link to="/communication">
          <i class="icon-msnui-menu-left back-icon"></i>
        </router-link>
      </section>
      <section class="title">
        通讯
      </section>
      <section class="scan icon-sec">
        <i class="icon-wode"></i>
      </section>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .chat-wrapper
    position fixed
    z-index 101
    top 0
    bottom 0
    left 0
    right 0
    background #fff
    & > .header
      display flex
      justify-content space-between
      position fixed
      z-index 100
      width 100%
      height 1.1733rem
      background rgb(58, 153, 240)
      font-size 0
      color #fff
      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
          color #fff
          &>a
            &>.back-icon
              color #fff
              font-size 18px
      & > .title
        font-size 18px
</style>
