<template>
  <div class="interlocution-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <router-link to="/communication" class="icon-box">
          <i class="icon-xiaoxi"></i>
        </router-link>
      </section>
      <section class="title">
        问答
      </section>
      <section class="scan icon-sec">
        <router-link to="/interlocution/askTitle" class="icon-box">
          <i class="icon-bianji"></i>
        </router-link>
      </section>
    </header>
    <!--搜索-->
    <div class="search-box">
      <search></search>
    </div>
    <!--问题导航-->
    <nav class="nav">
      <section class="nav-item">
        <p class="text">我的问题</p>
      </section>
      <section class="nav-item">
        <i class="icon-wenda icon"></i>
        <p class="text">待解决</p>
      </section>
      <!--<section class="nav-item">-->
      <!--<i class="icon-wenda icon"></i>-->
      <!--<p class="text">我的回答</p>-->
      <!--</section>-->
    </nav>
    <!--问题列表-->
    <mt-loadmore ref="loadMore" :top-method="loadTop" class="body">
      <div class="ques-body">
        <section class="ques-item" v-for="ques in currentList">
          <!--提问者资料-->
          <div class="user-profile">
            <img :src="user.photo" class="avator">
            <!--提问者姓名-->
            <span class="name">{{user.realName}}</span>
          </div>
          <!--问题内容-->
          <div class="ques-text">
            <p class="ques-header">{{ques.title}}</p>
            <p class="ques-content">{{ques.content}}</p>
          </div>
          <!--问题日期-->
          <div class="date">
            {{ques.date}}
          </div>
          <!--问题状态-->
          <div class="status">
            {{ques.status}}
          </div>
        </section>
        <aside class="no-more">
          没有更多了
        </aside>
      </div>
    </mt-loadmore>
    <footer-navigator></footer-navigator>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from '../../components/footer/footer.vue'
  import Search from 'components/search/search'
  import {getQuesList} from '../../service/getData'
  import {getUserInfo} from '../../config/storage'
  import {Loadmore} from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore)
  export default {
    data () {
      return {
//        allLoaded: false,
        currentList: [],
        user: {}
      }
    },
    created () {
      if (getUserInfo().realName !== undefined) {
        this.user = Object.assign({}, getUserInfo())
      }
      this._initialData()
    },
    methods: {
      _initialData () {
        getQuesList(2).then(res => {
          res = res.data
          if (res instanceof Array) {
            this.currentList = res.map((item) => {
              return {
                id: item.id,
                title: item.title,
                content: item.content,
                status: item.status === 'TO_BE_ANSWER' ? '等待回答' : '已回答',
                date: item.askTimeStr
              }
            })
          }
        })
      },
      loadTop () {
        this._initialData()
        this.$refs.loadMore.onTopLoaded()
      }
    },
    components: {
      'footerNavigator': Footer,
      'search': Search
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  & > .interlocution-wrapper
    background #fff
    & > .header
      display flex
      justify-content space-between
      position fixed
      top 0
      z-index 100
      width 100%
      height 1.1733rem
      background rgb(58, 153, 240)
      font-size 0
      color #fff
      transition all .1s
      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
          & > .icon-box
            & > .icon-xiaoxi
              font-size 0
              color #fff
            & > .icon-bianji
              color #fff
      & > .title
        font-size 18px

    & > .search-box
      position fixed
      top 1.1733rem
      width 100%
      background #fff
    & > .nav
      position fixed
      z-index 100
      top 2.8rem
      width 99.8%
      padding .24rem 0
      font-size 0
      background #fff
      & > .nav-item
        display inline-block
        width 49%
        line-height 22px
        text-align center
        font-size 16px
        color #989898
        &:not(:last-child)
          border-right 1px solid #ccc
        & > .text
          display inline-block
        & > .icon
          vertical-align top
          display inline-block
    & > .body
      margin-top 4rem
      padding-bottom 1.3777rem
      background #f0f0f0
      &>.mint-loadmore-content
        & > .ques-body
          & > .no-more
            padding .24rem 0
            color #ccc
            text-align center
            font-size 14px

  .ques-item
    padding .24rem
    background #fff
    &:not(:last-child)
      margin-bottom .2rem
    & > .user-profile
      font-size 0
      & > .avator
        display inline-block
        vertical-align top
        width .66rem
        height .66rem
        border-radius 50%
        margin-right .2rem
      & > .name
        line-height .66rem
        font-size 14px
        color #989898
    & > .ques-text
      margin-top .3rem
      & > .ques-header
        width 60%
        font-size 18px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      & > .ques-content
        margin-top .25rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        font-size 14px
    & > .date
      display inline-block
      margin-top .4rem
      font-size 12px
      color #ccc
      margin-right .3rem
    & > .status
      display inline-block
      font-size 12px
      color #ccc
</style>
