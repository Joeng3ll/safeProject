<template>
  <page>
    我的工时记录
    <div slot="state-item-one" class="item-box">
      <p class="year">2017<span>年</span></p>
      <p class="month">05<span>月</span><i class="icon-xiangxia"></i></p>
    </div>
    <div slot="state-item-two" class="item-box">
      <p class="item-name">年工时</p>
      <p class="item-content">360<span>小时</span></p>
    </div>
    <div slot="state-item-three" class="item-box">
      <p class="item-name">月工时</p>
      <p class="item-content">24<span>小时</span></p>
    </div>
  </page>
</template>

<script type="text/ecmascript-6">
  import PageCpt from './pageComponent/pageComponent.vue'
  export default {
    components: {
      'page': PageCpt
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.item-box
  color #fff
  &>.year
    font-size 12px
    margin-bottom .3rem
    &>span
      margin-left .1rem
      font-size 10px
  &>.month
    font-size 24px
    padding-left .5rem
    &>span
      &:first-child
        margin-left .1rem
        margin-right .2rem
        font-size 12px
    &>.xiangxia
      font-size 12px
  &>.item-name
    font-size 12px
    margin-bottom .3rem
  &>.item-content
    font-size 24px
    padding-left .5rem
    &>span
      margin-left .1rem
      font-size 12px
</style>
