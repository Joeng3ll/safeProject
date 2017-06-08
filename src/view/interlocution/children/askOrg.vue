<template>
  <div class="askOrg-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <span class="icon-box href-text" @click="forward">
          返回问题内容
        </span>
      </section>
      <section class="scan icon-sec">
        <span class="icon-box href-text" @click="commit">
          提交
        </span>
      </section>
    </header>
    <mt-checklist title="提问组织" :max="maxCheck" v-model="orgId" :options="options"></mt-checklist>
    <!--错误提示-->
    <p class="err-text">
      {{errText}}
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {Checklist, Toast} from 'mint-ui'
  import {getSuperOrgId} from 'service/getData'
  import {getUserInfo} from '../../../config/storage'
  Vue.component(Checklist.name, Checklist)
  Vue.component(Toast.name, Toast)
  export default {
    data () {
      return {
        orgId: [],
        errText: '',
        maxCheck: 1,
        options: []
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
        let orgId = getUserInfo().organizationId
        let arr = []
//        数据初始化 组织id 从后台拉取数据
        getSuperOrgId(orgId).then(res => {
          arr = res.data.slice(0)
          this.options = arr.map((item) => {
            return {
              label: item.name,
              value: item.id
            }
          })
        })
      },
      commit () {
        if (this.orgId && this.orgId.length > 0) {
//           提交数据、清空缓存问题
          this._initialToast()
          console.log(this.orgId)
        } else {
          this.errText = '请选择提问组织!!'
        }
      },
//      提示框
      _initialToast () {
        let toast = Toast({
          message: '提交问题成功!'
        })
        setTimeout(() => {
          toast.close()
        }, 2000)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .askOrg-wrapper
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
    & > .mint-checklist
      margin-top 1.8rem

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
