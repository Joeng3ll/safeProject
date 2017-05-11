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
  </div>
</template>

<script type="text/ecmascript-6">
  import MsgCmp from '../../components/msgComponent/msgComponent.vue'
  export default {
    components: {
      'msgCmp': MsgCmp
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-wrapper
    .header
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
        font-size 20px
</style>
