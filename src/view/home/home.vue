<template>
  <div class="home-wrapper">
    <header class="header">
      <section class="msg">
        <msg-cmp :msgCount="10"></msg-cmp>
      </section>
      <section class="title">
        首页
      </section>
      <section class="scan">
        <i class="icon-xiaoxi"></i>
      </section>
    </header>
    <nav class="news-nav">
      <news-menu></news-menu>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import MsgCmp from '../../components/msgComponent/msgComponent.vue'
  import NewsMenu from './newsMenu/newsMenu.vue'
  import fetch from '../../config/fetch'
  export default {
    created () {
      fetch.get('/toutiao/index?type=top&key=68e5b38d548adabc8b842a2ae29e3d40').then((res) => {
        console.log(res)
      })
    },
    components: {
      'msgCmp': MsgCmp,
      'newsMenu': NewsMenu
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-wrapper
    & > .header
      display flex
      justify-content space-between
      height 1.1733rem
      padding 0 .48rem
      background rgb(58, 153, 240)
      font-size 0
      color #fff
      & > section
        display inline-block
        line-height 1.1733rem
      & > .title
        font-size 18px
    & > .news-nav
      background rgb(248, 248, 248)
      box-shadow 0px 0px 5px rgba(0, 0, 0, 0.1)
</style>
