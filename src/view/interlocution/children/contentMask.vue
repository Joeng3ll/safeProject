<template>
  <div class="contentMask-wrapper" v-show="isShowMore">
    <section class="mask" @click="changeIsShow"></section>
    <article class="body">
      <section class="menu">
        <!--结帖-->
        <div class="menu-item close" @click="closeQues()" v-show="!isCloseQues">
          <p class="icon-box"><i class="icon-modify icon"></i></p>
          <p class="text">设为结贴</p>
        </div>
        <!--删除问题-->
        <div class="menu-item" @click="deleteQues()">
          <p class="icon-box"><i class="icon-lajitong icon"></i></p>
          <p>删除问题</p>
        </div>
      </section>
      <section class="cancel" @click="changeIsShow">
        取消
      </section>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['isCloseQues'],
    data () {
      return {
        isShowMore: false
      }
    },
    methods: {
      changeIsShow () {
        this.isShowMore = !this.isShowMore
      },
//     设为结帖
      closeQues () {
        this.$emit('toCloseQues')
      },
//      删除问题
      deleteQues () {
        this.$emit('toDeleteQues')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contentMask-wrapper
    & > .mask
      z-index 101
      position fixed
      top 0
      left 0
      bottom 0
      right 0
      background rgba(7, 17, 27, 0.4)
    & > .body
      z-index 101
      position fixed
      left 0
      right 0
      bottom 0
      background #fff
      & > .menu
        padding .8rem 0
        text-align center
        & > .menu-item
          display inline-block
          text-align center
          color rgb(132, 147, 177)
          &.close
            margin-right 1.5rem
          & > .icon-box
            padding .2rem
            display inline-block
            border 2px solid rgb(132, 147, 177)
            border-radius 50%
            text-align center
            margin-bottom .2rem
            & > .icon
              font-size 32px
      & > .cancel
        border-top 1px solid #ccc
        color #989898
        padding .36rem
        text-align center
        font-size 18px
</style>
