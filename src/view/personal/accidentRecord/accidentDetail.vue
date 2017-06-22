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

    &>.body
      position absolute
      left 0
      right 0
      top 1.1733rem
      padding .48rem
      &>.item
        padding: .24rem
        font-size 16px
        line-height 18px
        color #555
        &>.key
          margin-right .3rem
</style>
