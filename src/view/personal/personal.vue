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
        <i class="icon-saoyisao"></i>
      </section>
    </header>
    <article class="body">
      <!--我的信息开始-->
      <section class="body-item">
        <img :src="driver.photo" class="avator">
        <div class="personal-card">
          <p class="name">{{driver.name}}</p>
          <section class="star-level">
            <star :sizeNum="36" :score="driver.star_level"></star>
          </section>
        </div>
        <i class="icon-iconfontright-copy icon"></i>
      </section>
      <!--我的信息结束-->
      <!--菜单栏开始-->
      <tab :iconClass="archives.iconClass" :text="archives.text" class="menu-item"></tab>
      <!--菜单栏结束-->
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import MsgCmp from '../../components/msgComponent/msgComponent.vue'
  import Star from '../../components/star/star.vue'
  import Tab from '../../components/tab/tab.vue'
  import {getDriverInfo} from '../../service/getData'
  const archives = {
    'iconClass': 'icon-dangan',
    'text': '我的档案'
  }
  const work_record = {
    'iconClass': 'icon-kaoqinyuanshijilu',
    'text': '我的考勤记录'
  }
  const accident_record = {
    'iconClass': 'icon-kaoqinyuanshijilu',
    'text': '我的事故记录'
  }
  const training = {
    'iconClass': 'icon-kaoqinyuanshijilu',
    'text': '我的培训'
  }
  const training = {
    'iconClass': 'icon-kaoqinyuanshijilu',
    'text': '我的培训'
  }
  export default {
    data () {
      return {
        driver: Object,
        archives,
        work_record,
        accident_record
      }
    },
    created () {
      getDriverInfo().then(res => {
        this.driver = res
      })
    },
    components: {
      'msgCmp': MsgCmp,
      'star': Star,
      'tab': Tab
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
      width 100%
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

    & > .body
      padding-top 1.1733rem
      & > .body-item
        position relative
        padding .28rem .56rem
        margin-top .48rem
        background #fff
        font-size 0
        & > .avator
          display inline-block
          width 1.73333rem
          height 1.73333rem
          border-radius 50%
          margin-right .24rem
          vertical-align top
        & > .personal-card
          display inline-block
          padding .3833rem .1rem
          & > .name
            font-size 16px
            margin-bottom .2rem
          & > .star-level
            & > .text
              font-size 12px
              display inline-block
            & > .star-wrapper
              display inline-block
        & > .icon
          position absolute
          right .48rem
          top 40%
          color #ccc
      & > .menu-item
        margin-top .8rem

</style>
