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
        <p class="name">{{this.$route.params.id}}</p>
      </div>
    </article>
    <footer class="footer">
      <p class="send-btn" @click="sendMsg()">发送消息</p>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      console.log(this.$route.params)
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
        & > p
          font-size 12px
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
