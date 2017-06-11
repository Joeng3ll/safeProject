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
      <section class="scan icon-sec" @click="showMore">
        <router-link to="" class="icon-box">
          <i class="icon-gengduo"></i>
        </router-link>
      </section>
    </header>
    <mt-loadmore ref="loadMore" :top-method="loadTop" class="body">
      <article class="ques-box">
        <section class="ques-item">
          <img :src="user.photo" class="avator">
          <span class="username">{{user.realName}}</span>
          <span class="date">{{ques.askTimeStr}}</span>
        </section>
        <!--问题标题、内容开始-->
        <section class="ques-item">
          <p class="text title">{{ques.title}}</p>
          <p class="text">{{ques.content}}</p>
        </section>
        <!--问题标题、内容结束-->
        <!--问题状态、时间-->
        <section class="ques-item last-item">
          <span class="askOrg">建议回答人：{{ques.askOrgName}}</span>
          <span class="status">{{status}}</span>
        </section>
      </article>
    </mt-loadmore>
    <more ref="contentMask" :isCloseQues="isCloseQues" @toCloseQues="closeQues" @toDeleteQues="deleteQues"></more>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loadmore} from 'mint-ui'
  import {getUserInfo} from '../../../config/storage'
  import {getQuesMore} from 'service/getData'
  import ContentMask from './contentMask.vue'
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
        let quesId = this.$route.params.id
        getQuesMore(quesId).then((res) => {
          if (res.status === 200) {
            this.ques = Object.assign({}, res.data)
          }
        })
      },
      loadTop () {
//          重定位
        this.$refs.loadMore.onTopLoaded()
      },
      showMore () {
        this.$refs.contentMask.changeIsShow()
      },
      closeQues () {
        console.log('close')
      },
      deleteQues () {
        console.log('delete')
      }
    },
    computed: {
      status () {
        let str = ''
        switch (this.ques.status) {
          case 'TO_BE_ANSWER':
            str = '等待回答'
            break
          case 'ANSWERED':
            str = '已回答'
            break
          case 'CLOSED':
            str = '已结帖'
            break
        }
        return str
      },
      isCloseQues () {
        return this.status === '已结帖'
      }
    },
    components: {
      'more': ContentMask
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
            margin-bottom .6rem
            &.last-item
              margin-top 1.5rem
              margin-bottom .2rem
            & > .avator
              width 1rem
              height 1rem
              vertical-align top
              margin-right .2rem
              border-radius 50%
            & > .username
              display inline-block
              line-height 1rem
              font-size 14px
            & > .date
              float right
              line-height 1rem
              font-size 12px
            & > .text
              color rgb(7, 17, 27)
              line-height 24px
              font-size 16px
              &.title
                font-size 18px
                margin-bottom .3rem
            & > .status, & > .askOrg
              font-size 14px
            & > .status
              float right

</style>
