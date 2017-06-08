<template>
  <div class="archives-wrapper">
    <header-cpt :text="header.text"></header-cpt>
    <article class="archives-body" ref="archivesBody">
      <div class="slide-body">
        <!--基本信息开始-->
        <section class="item">
          <header class="item-header">
            基本信息
          </header>
          <article class="item-body">
            <p class="text">姓名:</p>
            <p class="text">联系电话:</p>
            <p class="text">身份证号码:</p>
            <p class="text">目前住址:</p>
            <p class="text">紧急联系人:</p>
            <p class="text">紧急联系人电话:</p>
          </article>
        </section>
        <!--基本信息结束-->
        <!--驾驶证信息开始-->
        <section class="item">
          <header class="item-header">
            驾驶证信息
          </header>
          <article class="item-body">
            <p class="text">驾驶证类别:</p>
            <p class="text">驾驶证车牌号码:</p>
            <p class="text">培训号码:</p>
          </article>
        </section>
        <!--驾驶证信息结束-->
        <!--车企信息开始-->
        <section class="item">
          <header class="item-header">
            车企信息
          </header>
          <article class="item-body">
            <p class="text">企业名称:</p>
            <p class="text">车队长姓名:</p>
            <p class="text">车队长电话:</p>
          </article>
        </section>
        <!--车企信息结束-->
        <!--工作经历开始-->
        <section class="item">
          <header class="item-header">
            工作经历
          </header>
          <article class="item-body">
            <p class="text">企业名称:</p>
            <p class="text">车队长姓名:</p>
            <p class="text">车队长电话:</p>
          </article>
        </section>
        <!--工作经历结束-->
      </div>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/header/header'
  import BScroll from 'better-scroll'
  const header = {
    text: '我的档案'
  }
  export default {
    data () {
      return {
        header
      }
    },
    mounted () {
      this._initialBScroll()
    },
    methods: {
      _initialBScroll () {
        let Body = this.$refs.archivesBody
        if (this.bodyScroll === undefined) {
          this.bodyScroll = new BScroll(Body, {click: true, scrollY: true})
        } else {
          this.bodyScroll.refresh()
        }
      }
    },
    components: {
      'headerCpt': Header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .archives-wrapper
    position fixed
    top 0
    left 0
    bottom 0
    background #fff
    width 100%
    z-index 101
    & > .archives-body
      position fixed
      top 1.1733rem
      bottom 0
      left 0
      right 0
      background #f0f0f0
      overflow hidden
      & > .slide-body
        padding-top .3rem
        & > .item
          padding 0 .36rem .48rem .36rem
          margin-top .3rem
          background #fff
          color #989898
          &:last-children
            margin-bottom .3rem
          & > .item-header
            padding .36rem 0
            border-bottom 1px solid #ccc
          & > .item-body
            & > .text
              margin-top .36rem
</style>
