<template>
  <div class="announce-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <router-link to="/home" class="icon-box">
          <i class="icon-msnui-menu-left icon"></i>
        </router-link>
      </section>
      <section class="title" @click="test()">
        我的消息
      </section>
      <section class="scan icon-sec">
        <i class="icon-gengduo"></i>
      </section>
    </header>
    <!--切换已读、未读-->
    <nav class="nav">
      <section class="nav-item" @click="changeType(selectType.unready)" :class="{active:currentType===0}">
        <span class="msg-count">10</span>
        <span class="text">未读</span>
      </section>
      <section class="nav-item" @click="changeType(selectType.already)" :class="{active:currentType===1}">
        <span class="text">已读</span>
      </section>
    </nav>
    <!--消息列表开始-->
    <article class="body">
      <div class="slide-body">
        <mt-loadmore ref="loadMore" :top-method="topMethod">
          <section class="announce-item" v-for="msg in msgList" @click="intoAnnounce(msg.id)">
            <!--通知发布人头像-->
            <div class="avator">
              <i class="icon-tongzhi icon"></i>
            </div>
            <!--发布通知的内容-->
            <div class="item-content">
              <p class="name">{{msg.by}}</p>
              <p class="content-text">{{msg.content}}</p>
              <span class="date">{{msg.date}}</span>
            </div>
          </section>
          <aside class="no-more">
            没有更多了
          </aside>
        </mt-loadmore>
      </div>
    </article>
    <!--消息列表结束-->
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loadmore} from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore)
  const selectType = {
    unready: 0,
    already: 1
  }
  export default {
    data () {
      return {
        msgList: [
          {
            id: 1,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          },
          {
            id: 2,
            title: '通知标题',
            content: '通知内容',
            by: '某车企',
            date: '昨天下午2:22',
            status: '待回复'
          }
        ],
        selectType,
        currentType: selectType.unready
      }
    },
    methods: {
//        修改菜单
      changeType (type) {
//        console.log(type)
        if (type !== this.currentType) {
          this.currentType = this.currentType === selectType.unready ? selectType.already : selectType.unready
        } else {
          return
        }
      },
//      进入某个通知详情页面
      intoAnnounce (id) {
        this.$router.push(`/announce/${id}`)
      },
      topMethod () {
        this.$refs.loadMore.onTopLoaded()
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .announce-wrapper
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

    & > .nav
      position fixed
      z-index 100
      left 0
      right 0
      top 1.1733rem
      line-height 1rem
      background #fff
      font-size 0
      box-shadow .01rem .01rem .03rem #ccc
      & > .nav-item
        display inline-block
        width 50%
        text-align center
        color #989898
        &.active
          background #f0f0f0
          color #3a99f0
          box-shadow .01rem .01rem .03rem #ccc
        & > .msg-count
          font-size 12px
          padding .1rem
          margin-right .2rem
          background red
          color #fff
          border-radius 50%
        & > .text
          font-size 16px
    & > .body
      padding-top 2.32rem
      padding-bottom .5rem
      & > .slide-body
        & > .mint-loadmore
          & > .mint-loadmore-content
            & > .announce-item
              position relative
              padding .36rem .24rem 0 .24rem
              font-size 0
              & > .avator
                display inline-block
                border-radius 50%
                padding .1rem
                vertical-align top
                margin-right .2rem
                text-align center
                background rgb(58, 153, 240)
                color #fff
                & > .icon
                  font-size 1rem
              & > .item-content
                width 82%
                display inline-block
                border-bottom 1px solid #f0f0f0
                padding 0 0 .24rem 0
                color rgb(79, 88, 109)
                & > .name
                  padding-right 2.5rem
                  line-height 26px
                  font-size 16px
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                & > .content-text
                  color rgb(7, 17, 27)
                  line-height 22px
                  font-size 14px
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                & > .date
                  position absolute
                  top .5rem
                  right .6rem
                  font-size 12px
                  color #ccc
            & > .no-more
              padding .24rem 0
              color #ccc
              text-align center
              font-size 14px

</style>
