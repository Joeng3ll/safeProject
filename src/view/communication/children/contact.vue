<template>
  <div class="contact-wrapper">
    <!--通讯录内容-->
    <article class="contact-content">
      <header class="header">
        通讯录
      </header>
      <!--搜索-->
      <search></search>
      <!--通讯录列表-->
      <div class="contact-list">
        <!--群聊-->
        <section class="group-chat">
          <div class="icon-box">
            <i class="icon-wode"></i>
          </div>
          <span class="text">群聊</span>
        </section>
      </div>
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
  import Search from 'components/search/search'
  export default {
    methods: {
      closeContact () {
        this.$emit('closeContact')
      }
    },
    components: {
      'search': Search
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
    background rgba(7, 17, 27, 0.8)
    & > .contact-content
      display inline-block
      width 85%
      height 100%
      background #fff
      & > .header
        width 100%
        height 1.17333rem
        line-height 1.1733rem
        text-align center
        font-size 16px
        color #fff
        background rgb(58, 153, 240)
      & > .contact-list
        & > .group-chat
          padding .24rem
          & > .text
            font-size 14px
          & > .icon-box
            display inline-block
            width .88rem
            height .88rem
            line-height .88rem
            margin-right .2rem
            text-align center
            color #fff
            border-radius .1rem
            background palevioletred
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
