<template>
  <div class="accidentDetail-wrapper">
    <header class="header">
      <section class="msg icon-sec" @click="back">
        <!--<router-link to="/home" class="icon-box">-->
        <i class="icon-msnui-menu-left icon"></i>
        <!--</router-link>-->
      </section>
      <section class="title">
        事故详情
      </section>
      <section class="scan icon-sec">
      </section>
    </header>
    <article class="body">
      <div class="info">
        <p class="info-text">事故基本情况</p>
        <!--驾驶员-->
        <section class="item">
          <span class="key">驾驶员:</span>
          <span class="value">{{accident.driver}}</span>
        </section>
        <!--车牌号-->
        <section class="item">
          <span class="key">车牌号:</span>
          <span class="value">{{accident.carNo}}</span>
        </section>
        <!--受伤人数-->
        <section class="item">
          <span class="key">受伤人数:</span>
          <span class="value">{{accident.injuredNum}}</span>
        </section>
        <!--事故地点-->
        <section class="item">
          <span class="key">事故地点:</span>
          <span class="value">{{accident.injuredPlace}}</span>
        </section>
        <!--死亡人数-->
        <section class="item">
          <span class="key">死亡人数:</span>
          <span class="value">{{accident.deadNum}}</span>
        </section>
        <!--事故发生时间-->
        <section class="item">
          <span class="key">发生时间:</span>
          <span class="value">{{accident.occureTimeStr}}</span>
        </section>
        <!--是否转弯-->
        <section class="item">
          <span class="key">转弯情况:</span>
          <span class="value">{{accident.data1Str}}</span>
        </section>
        <!--制动情况-->
        <section class="item">
          <span class="key">制动情况:</span>
          <span class="value">{{accident.data2Str}}</span>
        </section>
        <!--是否空车-->
        <section class="item">
          <span class="key">是否空车:</span>
          <span class="value">{{accident.data3Str}}</span>
        </section>
        <!--天气情况-->
        <section class="item">
          <span class="key">天气情况:</span>
          <span class="value">{{accident.data4Str}}</span>
        </section>
        <!--是否超速-->
        <section class="item">
          <span class="key">是否超速:</span>
          <span class="value">{{accident.data5Str}}</span>
        </section>
        <!--交通违章类型-->
        <section class="item">
          <span class="key">交通违章类型:</span>
          <span class="value">{{accident.trafficViolationType}}</span>
        </section>
        <!--事故提交状态-->
        <section class="item state">
          <span class="key">事故处理状态:</span>
          <span class="value">{{accident.statusStr}}</span>
        </section>
      </div>
      <!--事故确认情况-->
      <div class="info" v-if="accident.confirmerId!==null">
        <p class="info-text">事故确认情况</p>
        <!--事故确认人-->
        <section class="item">
          <span class="key">确认人:</span>
          <span class="value">{{accident.confirmer}}</span>
        </section>
        <!--事故确认时间-->
        <section class="item">
          <span class="key">确认时间:</span>
          <span class="value">{{accident.confirmTimeStr}}</span>
        </section>
      </div>
      <!--事故理赔详情-->
      <div class="info" v-if="accident.compensationId!==null">
        <p class="info-text">事故理赔情况</p>
        <!--理赔录入人-->
        <section class="item">
          <span class="key">理赔录入人:</span>
          <span class="value">{{accident.inputter}}</span>
        </section>
        <!--录入时间-->
        <section class="item">
          <span class="key">录入时间:</span>
          <span class="value">{{accident.inputTimeStr}}</span>
        </section>
        <!--理赔类型-->
        <section class="item">
          <span class="key">理赔类型:</span>
          <span class="value">{{accident.compensationType}}</span>
        </section>
        <!--保险金额-->
        <section class="item">
          <span class="key">保险公司:</span>
          <span class="value">{{accident.compensationFee}}</span>
        </section>
        <!--保险金额 备注-->
        <section class="item">
          <span class="key">备注:</span>
          <span class="value">{{accident.remark}}</span>
        </section>
        <!--保险公司-->
        <section class="item">
          <span class="key">保险公司:</span>
          <span class="value">{{accident.insuranceCompany}}</span>
        </section>
      </div>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAccidentById} from '../../../service/getData'
  export default {
    data () {
      return {
        accident: {}
      }
    },
    mounted () {
      let id = parseInt(this.$route.params.id)
      console.log(id)
      getAccidentById(id).then(res => {
        res = res.data.data
        this.accident = Object.assign({}, res)
      })
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .accidentDetail-wrapper
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
      left 0
      right 0
      top 1.1733rem
      padding .48rem
      & > .info
        margin-bottom .3rem
        & > .info-text
          width 90%
          padding: .24rem .24rem .24rem 0
          margin-left .2rem
          border-bottom 1px solid #f0f0f0
          font-size 14px
          color #ccc
        & > .item
          padding: .24rem
          font-size 16px
          line-height 18px
          color #555
          &:nth-child(2n)
            background #DDEEDF
          &:nth-child(2n+1)
            background #F2F9F1
          &.state
            color red
          & > .key
            margin-right 0
</style>
