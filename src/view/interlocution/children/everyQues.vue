<template>
  <div class="everyQues-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <router-link to="/interlocution" class="icon-box">
          <i class="icon-msnui-menu-left"></i>
        </router-link>
      </section>
      <section class="title">
        问题详情
      </section>
      <section class="scan icon-sec">
        <router-link to="/interlocution/askTitle" class="icon-box">
          <i class="icon-gengduo"></i>
        </router-link>
      </section>
    </header>
    <mt-loadmore ref="loadMore" :top-method="loadTop" class="body">
      <article class="ques-box">
        <section class="ques-item">
          <img :src="user.photo" class="avator">
          <span class="username">{{user.realName}}</span>
        </section>
      </article>
    </mt-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loadmore} from 'mint-ui'
  import {getUserInfo} from '../../../config/storage'
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore)
  export default {
    data () {
      return {
        user: {},
        ques: {},
        commentList: []
      }
    },
    created () {
      this._initialData()
    },
    methods: {
      _initialData () {
        this.user = getUserInfo()
        if (this.user.photo !== undefined && this.user.photo === null) {
          this.user.photo = 'http://08.imgmini.eastday.com/mobile/20170607/20170607122123_3ca1c7688b197ceb6e91a522153fa95f_1_mwpm_03200403.jpeg'
        }
      },
      loadTop () {
//          重定位
        this.$refs.loadMore.onTopLoaded()
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .everyQues-wrapper
    position fixed
    z-index 101
    top 0
    left 0
    bottom 0
    right 0
    background #f0f0f0
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
            color #fff
            & > .icon-xiaoxi
              font-size 0
              color #fff
      & > .title
        font-size 18px

    & > .body
      margin-top 1.1733rem
      & > .mint-loadmore-content
        & > .ques-box
          padding .36rem
          background #fff
          & > .ques-item
            color #989898
            font-size 0
            & > .avator
              width 1rem
              height 1rem
              vertical-align top
              margin-right .2rem
              border-radius 50%
            &>.username
              display inline-block
              line-height 1rem
              font-size 14px
</style>
