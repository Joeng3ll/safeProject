<template>
  <div class="star-wrapper" :class="size">
    <span v-for="starClass in starList" class="star" :class="starClass"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const starOn = 'starOn'
  const starOff = 'starOff'
  const starNum = 5
  export default {
    data () {
      return {}
    },
    props: ['sizeNum', 'score'],
    computed: {
      size () {
        return `size-${this.sizeNum}`
      },
      starList () {
        let list = []
        let scoreNum = 0
//        传入的score :"n星级驾驶员"
        if (this.score) {
          switch (this.score) {
            case '一星级驾驶员':
              scoreNum = 1
              break
            case '二星级驾驶员':
              scoreNum = 2
              break
            case '三星级驾驶员':
              scoreNum = 3
              break
            case '四星级驾驶员':
              scoreNum = 4
              break
            case '五星级驾驶员':
              scoreNum = 5
              break
            default:
              scoreNum = 0
          }
        }
//        整星
        let onNum = Math.floor(scoreNum)
        for (let i = 0; i < onNum; i++) {
          list.push(starOn)
        }
//        无星
        if (list.length < starNum) {
          let offNum = starNum - list.length
          for (let i = 0; i < offNum; i++) {
            list.push(starOff)
          }
        }
        return list
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .star-wrapper
    &.size-24
      & > .star
        display inline-block
        width .2933rem
        height .2833rem
        &:not(:last-child)
          margin-right .1rem
        &.starOn
          bg-img('star24_on', .2933rem, .2833rem)
        &.starOff
          bg-img('star24_off', .2933rem, .2833rem)
    &.size-36
      & > .star
        display inline-block
        width .3933rem
        height .3833rem
        &:not(:last-child)
          margin-right .1rem
        &.starOn
          bg-img('star24_on', .3933rem, .3833rem)
        &.starOff
          bg-img('star24_off', .3933rem, .3833rem)
</style>
