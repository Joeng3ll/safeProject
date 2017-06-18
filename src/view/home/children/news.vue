<template>
  <div class="news-wrapper">
    <header class="header">
      <section class="msg icon-sec" @click="back">
        <!--<router-link to="/home" class="icon-box">-->
        <i class="icon-msnui-menu-left icon"></i>
        <!--</router-link>-->
      </section>
      <section class="title">

      </section>
      <section class="scan icon-sec">
      </section>
    </header>
    <!--新闻主体-->
    <article class="body">
      <!--新闻标题-->
      <header class="header">{{news.title}}</header>
      <!--新闻日期-->
      <p class="date">{{news.createDate | formateDate(news.createDate)}}</p>
      <!--新闻图片-->
      <div class="photo-box"><img class="photo"
                                  src="http://08.imgmini.eastday.com/mobile/20170617/20170617173207_47b5169b98330c9e6b307620f8e8c6a9_3_mwpm_03200403.jpeg">
      </div>
      <!--新闻内容-->
      <p class="content">{{news.text}}</p>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getNewsContent} from '../../../service/getData'
  import {formateDate} from '../../../common/js/Util'
  export default {
    data () {
      return {
        news: {
          title: '中外新闻',
          text: '中外新闻中外新闻中外新闻中外新闻中外新闻中外新闻中外新闻中外新闻中外新闻中外新闻',
          createDate: 1497703952000
        }
      }
    },
    filters: {
      formateDate (date) {
        return formateDate(date)
      }
    },
    created () {
      let id = this.$route.params.id
      getNewsContent(id).then((res) => {
        console.log(res)
      })
    },
    methods: {
      back () {
//          todo 返回的时候 返回到对应的type页
        this.$router.go(-1)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .news-wrapper
    min-height 100vh
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
      top 1.1733rem
      padding .36rem .24rem .24rem .24rem
      & > .header
        text-align center
        line-height 26px
        font-size 22px
        font-weight bold
        margin-bottom .4rem
      &>.date
        margin-bottom .4rem
        text-align center
        color #ccc
      & > .photo-box
        text-align center
        & > .photo
          max-width 100%
      &>.content
        padding .48rem
        font-size 16px
        line-height 18px
        letter-spacing .04rem
        color rgb(7,17,27)
</style>
