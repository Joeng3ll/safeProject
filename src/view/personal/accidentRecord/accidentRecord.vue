<template>
  <div class="accidentRecord-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <router-link to="/personal" class="icon-box">
          <i class="icon-msnui-menu-left icon"></i>
        </router-link>
      </section>
      <section class="title">
        事故记录
      </section>
      <section class="scan icon-sec" @click="report">
        <i class="icon-note"></i>
      </section>
    </header>
    <article class="body">
      <mt-loadmore :top-method="topLoad" ref="loadMore">
        <!--菜单-->
        <nav class="nav-box">
          <div class="nav">
            <span class="item active">待处理</span>
            <span class="item">已处理</span>
          </div>
        </nav>
        <!--事故列表-->
        <div class="ac-list">
          <section class="item" v-for="item in accidentList">
            <span class="ac-type">{{item.type}}</span>
            <span class="ac-date">{{item.date}}</span>
          </section>
          <aside class="no-more">
            没有更多了
          </aside>
        </div>
      </mt-loadmore>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loadmore} from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore)
  export default {
    data () {
      return {
        accidentList: [
          {type: '闯红灯', date: '2015-03-04'},
          {type: '闯红灯', date: '2015-03-04'},
          {type: '闯红灯', date: '2015-03-04'},
          {type: '闯红灯', date: '2015-03-04'}
        ]
      }
    },
    methods: {
//      上拉刷新
      topLoad () {
        this.$refs.loadMore.onTopLoaded()
      },
//      事故上报
      report () {
        this.$router.push('/reportAccident')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .accidentRecord-wrapper
    min-height 100%
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
      box-shadow .01rem .01rem .01rem #ccc
      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
          & > .icon-box
            & > .icon
              color #fff
      & > .title
        font-size 18px

    & > .body
      position absolute
      width 100%
      top 1.1733rem
      & > .mint-loadmore
        & > .mint-loadmore-content
          & > .nav-box
            padding .24rem
            text-align center
            & > .nav
              width 60%
              margin 0 auto
              border-radius .8rem
              font-size 0
              background #f0f0f0
              box-shadow .01rem .01rem .3rem #ccc
              -moz-box-shadow .01rem .01rem .3rem #ccc
              -webkit-box-shadow .01rem .01rem .3rem #ccc
              & > .item
                display inline-block
                padding 4%
                width 42%
                color #555555
                font-size 16px
                &.active
                  border-radius .8rem
                  background rgb(86, 217, 138)
                  color #fff
          & > .ac-list
            min-height 13rem
            margin-top .5rem
            & > .item
              color #555555
              border-top 1px solid #f0f0f0
              border-bottom 1px solid #f0f0f0
              padding .36rem .48rem
              margin-bottom .4rem
              & > .ac-type
                font-size 16px
              & > .ac-date
                float right
                color #ccc
                font-size 14px

            & > .no-more
              padding .24rem 0
              color #ccc
              text-align center
              font-size 14px

</style>
