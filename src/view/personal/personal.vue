<template>
  <div class="personal-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <msg-cmp :msgCount="10"></msg-cmp>
      </section>
      <section class="title">
        我
      </section>
      <section class="scan icon-sec">
        <i class="icon-xiaoxi"></i>
      </section>
    </header>
    <article class="body">
      <section class="body-item">
        <img src="" alt="">
        <div class="personal-card">
          <p class="user-name">xxx</p>
          <p>
            星级标准
            <span></span>
          </p>
        </div>
      </section>
    </article>
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
  .personal-wrapper
    position fixed
    top 0
    bottom 1.30667rem
    width 100%
    left 0
    background #f0f0f0
    & > .header
      position: fixed
      z-index: 100
      width: 100%
      display flex
      justify-content space-between
      height 1.1733rem
      background rgb(58, 153, 240)
      font-size 0
      color #fff

      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
      & > .title
        font-size 18px

</style>
