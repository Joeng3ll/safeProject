<template>
  <div class="contact-wrapper">
    <!--通讯录内容-->
    <article class="contact-content">
      <header class="header">
        通讯录
      </header>
    </article>
    <!--通讯录侧栏-->
    <aside class="contact-aside">
      <span class="icon-box" @click="closeContact">
        <i class="icon-tongxunlu"></i>
      </span>
    </aside>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      closeContact () {
        this.$emit('closeContact')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contact-wrapper
    position fixed
    font-size 0
    /*header头部的z-index为100*/
    z-index 100
    top 0
    bottom 0
    left 0
    right 0
    background rgba(7, 17, 27, 0.5)
    & > .contact-content
      display inline-block
      width 85%
      height 100%
      background #fff
      &>.header
        width 100%
        height 1.17333rem
        line-height 1.1733rem
        text-align center
        font-size 16px
        color #fff
        background rgb(58, 153, 240)
    & > .contact-aside
      position relative
      vertical-align top
      display inline-block
      width 15%
      height 100%
      & > .icon-box
        display inline-block
        position absolute
        top .2rem
        left .48rem
        color #fff
</style>
