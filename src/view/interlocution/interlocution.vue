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
          <i class="icon-kaoshi"></i>
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
    <article class="body">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <section class="ques-item" v-for="ques in currentList">
          <!--提问者资料-->
          <div class="user-profile">
            <img :src="ques.pic" class="avator">
            <!--提问者姓名-->
            <span class="name">{{ques.user_name}}</span>
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
        </section>
      </mt-loadmore>
    </article>
    <footer-navigator></footer-navigator>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from '../../components/footer/footer.vue'
  import Search from 'components/search/search'
  import {Loadmore} from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore)
  export default {
    data () {
      return {
//        allLoaded: false,
        currentList: [
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'user_name': '张三',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_id': 1
          },
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'user_name': '张三',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_id': 1
          },
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_name': '张三',
            'user_id': 1
          },
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_name': '张三',
            'user_id': 1
          },
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_name': '张三',
            'user_id': 1
          },
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_name': '张三',
            'user_id': 1
          },
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_name': '张三',
            'user_id': 1
          },
          {
            'id': 1,
            'title': '驾驶员培训都有哪些流程？',
            'content': '驾驶员培训需要有哪些培训课程和考试？',
            'date': '2017-05-12 22:22:22',
            'pic': 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            'user_name': '张三',
            'user_id': 1
          }
        ]
      }
    },
    methods: {
      loadTop () {
        console.log('load more..')
        this.$refs.loadmore.onTopLoaded()
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
    padding-top 2.6rem
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
      & > .title
        font-size 18px

    & > .search-box
      position fixed
      z-index 100
      width 100%
      top 1.1733rem
      background #fff
    & > .nav
      position fixed
      z-index 100
      width 100%
      padding .24rem 0
      border-bottom 1px solid #f0f0f0
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
      position relative
      height 100%
      padding-top 1.3rem
      padding-bottom 1.3777rem
      min-height 12.8rem
      background #f0f0f0

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
      margin-top .4rem
      font-size 12px
      color #ccc
</style>
