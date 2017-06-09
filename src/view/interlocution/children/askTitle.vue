<template>
  <div class="askTitle-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <router-link to="/interlocution" class="icon-box href-text">
          取消
        </router-link>
      </section>
      <section class="scan icon-sec">
        <span class="icon-box href-text" @click="next">
          下一步
        </span>
      </section>
    </header>
    <mt-field label=" " placeholder="请输入问题标题" v-model="quesTitle" class="field"></mt-field>
    <!--错误提示-->
    <p class="err-text">
      {{errText}}
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Field} from 'mint-ui'
  import Vue from 'vue'
  import Store from '../../../vuex/index.js'
  import {getQuesTitleStorage} from '../../../config/storage'
  Vue.component(Field.name, Field)
  export default {
    data () {
      return {
        quesTitle: '',
        errText: ''
      }
    },
    created () {
      this._initialData()
    },
    methods: {
      next () {
        if (this.quesTitle === '' || this.quesTitle.length === 0) {
          this.errText = '问题标题不能为空!!'
        } else {
          Store.dispatch('editTitle', this.quesTitle)
          this.errText = ''
          this.$router.push('/interlocution/askContent')
        }
      },
      _initialData () {
        let res = getQuesTitleStorage()
        if (res !== 'undefined' && res !== null) {
          this.quesTitle = res.title
        }
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .askTitle-wrapper
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
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
