<template>
  <div class="contactProfile-wrapper">
    <header class="header">
      <router-link to="/communication" class="back-box">
        <i class="icon-left icon-msnui-menu-left"></i>
        <span class="text">通讯录</span>
      </router-link>
    </header>
    <article class="body clearFix">
      <div class="body-box">
        <section class="avator">
          <i class="icon-ren icon"></i>
        </section>
        <p class="username">{{user.name}}</p>
        <p class="phone">{{user.phone}}</p>
        <p class="tel">
          <i class="icon-tongxun icon"></i>
          {{user.phone}}
        </p>
        <p class="organization">
          <i class="icon-gongzuo icon"></i>
          {{user.organization}}
        </p>
      </div>
    </article>
    <footer class="footer">
      <p class="send-btn" @click="sendMsg()">发送消息</p>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getContactById} from '../../../config/mUtils'
  export default {
    data () {
      return {
        user: {}
      }
    },
    created () {
      let userId = parseInt(this.$route.params.id)
      let obj = getContactById(userId)
      if (obj !== null) {
        this.user = Object.assign(this.user, getContactById(userId))
      }
    },
    methods: {
      sendMsg () {
        let id = this.$route.params.id
        this.$router.replace(`/communication/chat/${id}`)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contactProfile-wrapper
    width 85%
    height 100%
    position fixed
    z-index 101
    top 0
    bottom 0
    background #fff
    font-size 0
    overflow auto
    & > .header
      position fixed
      width 85%
      height 1.17333rem
      line-height 1.17333rem
      background rgb(58, 153, 240)
      color #fff
      & > .back-box
        position relative
        left .24rem
        display block
        width 50%
        color #fff
        & > .icon-left
          font-size 16px
        & > .text
          margin-left .08rem
          font-size 16px
    & > .body
      margin-top 1.17333rem
      width 100%
      min-height 80%
      & > .body-box
        padding .24rem .48rem
        & > .avator
          margin-top 2rem
          text-align center
          color #3a99f0
          & > .icon
            font-size 2rem
        & > .username
          font-size 20px
          text-align center
          line-height 30px
        &>.organization,&>.tel
          margin-top .5rem
          font-size 16px
          text-align center
          line-height 28px
          color #989898
          &>.icon
            font-size 16px
            margin-right .1rem
    & > .footer
      & > .send-btn
        position relative
        left 7%
        width 75%
        text-align center
        border-radius .2rem
        padding .2rem .48rem
        font-size 18px
        color #fff
        background rgb(86, 217, 138)
</style>
