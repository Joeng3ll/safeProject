<template>
  <div class="evAnnounce-wrapper">
    <header class="header">
      <section class="msg icon-sec" @click="back">
        <i class="icon-msnui-menu-left icon"></i>
      </section>
      <section class="title">
        消息详情
      </section>
      <section class="scan icon-sec">
        <i class="icon-gengduo"></i>
      </section>
    </header>
    <article class="body">
      <div>
        <mt-loadmore ref="loadMore" :top-method="topMethod">
          <div class="msgRecord-box">
            <!--按身份判断类名 不同样式-->
            <p class="date">{{date}}</p>
            <section class="dialog" v-for="chat in chatList"
                     :class="{opposite:chat.type===dialogType.opposite,'myself':chat.type===dialogType.myself}">
              <!--头像-->
              <div class="avator dialog-item">
                <i class="icon icon-tongzhi"></i>
              </div>
              <!--聊天内容文本-->
              <p class="chat-text dialog-item">{{chat.text}}</p>
            </section>
          </div>
        </mt-loadmore>
      </div>
    </article>
    <!--输入框-->
    <div class="input-box">
      <mt-field label="" placeholder="请输入回复" type="textarea" v-model="replyText"></mt-field>
      <span class="send-btn">发送</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loadmore, Field} from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore)
  Vue.component(Field.name, Field)
  const dialogType = {
    opposite: 'admin',
    myself: 'myself'
  }
  export default {
    data () {
      return {
        date: '04-03 22:22:22',
        chatList: [
          {
            type: dialogType.opposite,
            date: '04-03 22:222:22',
            text: '您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好'
          },
          {
            type: dialogType.myself,
            text: 'hello'
          },
          {
            type: dialogType.myself,
            text: 'hello'
          },
          {
            type: dialogType.opposite,
            date: '04-03 22:222:22',
            text: '您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好'
          },
          {
            type: dialogType.opposite,
            date: '04-03 22:222:22',
            text: '您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好'
          },
          {
            type: dialogType.opposite,
            date: '04-03 22:222:22',
            text: '您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好'
          },
          {
            type: dialogType.opposite,
            date: '04-03 22:222:22',
            text: '您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好您好'
          }
        ],
        dialogType: dialogType,
        replyText: ''
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      topMethod () {
        this.$refs.loadMore.onTopLoaded()
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .evAnnounce-wrapper
    position relative
    z-index 100
    width 100%
    height 100%
    background #fff
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
      padding-top 1.1733rem
      padding-bottom 1.17333rem
    & > .input-box
      position fixed
      height 1.1733rem
      border-top 1px solid #f0f0f0
      left 0
      right 0
      bottom 0
      font-size 0
      & > .mint-cell
        display inline-block
        width 85%
        height 100%!important
        background-image none !important
        &>.mint-cell-wrapper
          background-image none!important
      & > .send-btn
        float right
        display inline
        width 14%
        padding-right 1%
        line-height 1.1733rem
        font-size 16px
        text-align center
        color rgb(58, 153, 240)
  .msgRecord-box
    padding .48rem .24rem
    & > .date
      padding .24rem
      color #ccc
      text-align center
    & > .dialog
      margin-bottom .4rem
      &.opposite
        overflow hidden
        width 80%
        & > .avator
          float left
          vertical-align top
          border-radius 50%
          margin-right .3rem
          padding .1rem
          background rgb(58, 153, 240)
          color #fff
          & > .icon
            font-size 22px
        & > .chat-text
          float left
          background #f0f0f0
      &.myself
        width 80%
        float right
        & > .avator
          display none
          float right
        & > .chat-text
          background beige
          display inline /* IE6*/
          float right
      & > .dialog-item
        display inline-block
        &.chat-text
          max-width 70%
          letter-spacing .01rem
          padding .24rem
          border-radius .2rem
          font-size 14px
          line-height 20px
          color rgb(7, 17, 27)


</style>
