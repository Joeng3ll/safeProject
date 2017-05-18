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

//        整星
        let onNum = Math.floor(this.score)
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
