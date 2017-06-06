<template>
  <div class="askContent-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <span class="icon-box href-text" @click="forward">
          上一步
        </span>
      </section>
      <section class="scan icon-sec">
        <span class="icon-box href-text" @click="next">
          下一步
        </span>
      </section>
    </header>
    <mt-field label=" " type="textarea" placeholder="请输入问题内容" v-model="quesContent" class="field"></mt-field>
    <!--错误提示-->
    <p class="err-text">
      {{errText}}
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Field} from 'mint-ui'
  import Vue from 'vue'
  import {getQuesContentStorage} from '../../../config/storage'
  import Store from '../../../vuex/index.js'
  Vue.component(Field.name, Field)
  export default {
    data () {
      return {
        quesContent: '',
        errText: ''
      }
    },
    created () {
      this._initialData()
    },
    methods: {
      forward () {
        this.$router.go(-1)
      },
      _initialData () {
        this.quesContent = getQuesContentStorage()
      },
      next () {
        if (this.quesContent === '' || this.quesContent.length === 0) {
          this.errText = '问题内容不能为空!!'
        } else {
          Store.dispatch('editContent', this.quesContent)
          this.errText = ''
          this.$router.push('/interlocution/askContent')
        }
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .askContent-wrapper
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background #fff
    & > .header
      justify-content space-between !important
    & > .header
      display flex
      justify-content center
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
          & > .href-text
            font-size 14px
            color #fff
      & > .title
        font-size 18px

    & > .field
      position relative
      top 1.1733rem

  & > .err-text
    position relative
    top 1.8rem
    font-size 16px
    text-align center
    color rgb(239, 98, 120)

  & > .mint-field
    & > .mint-cell-title
      width 1% !important
</style>
