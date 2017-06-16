<template>
  <div class="indexList-wrapper" ref="indexListWrapper">
    <!--<mt-index-list>-->
    <!--<mt-index-section :index="ptoe (letter)" v-for="(letter,index) in letterList">-->
    <!--<mt-cell :title="item.name" v-for="item in letter"></mt-cell>-->
    <!--</mt-index-section>-->
    <!--</mt-index-list>-->
    <aside v-for="(letter,index) in letterList" class="list-content">
      <span class="index">{{ptoe (letter)}}</span>
      <div class="list-content-box">
        <section v-for="item in letter" class="list-item" @click="intoProfile(item.id)">
          <p class="item-text">{{item.name}}（{{item.phone}}）</p>
        </section>
      </div>
    </aside>

  </div>
</template>

<script type="text/ecmascript-6">
  import {IndexList, IndexSection, Cell} from 'mint-ui'
  import Vue from 'vue'
  import {pinyin} from '../../common/js/pinyin'
  Vue.component(Cell.name, Cell)
  Vue.component(IndexList.name, IndexList)
  Vue.component(IndexSection.name, IndexSection)
  export default {
    data () {
      return {
        letterList: [],
        NUM: []
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
//      初始化排序列表
      _initialList () {
        let arr = []
        for (let i = 0; i < 26; i++) {
          arr[i] = []
        }
        let len = this.list.length || 0
        if (len > 0) {
          for (let i = 0; i < this.list.length; i++) {
            if (typeof this.list[i].name === 'string') {
              let letters = pinyin.getFullChars(this.list[i].name)
              let firLetter = letters.substring(0, 1).toUpperCase()
              arr[(firLetter.charCodeAt() - 65)].push(this.list[i])
            }
          }
        }
        this.letterList = arr.filter(function (item) {
          return item.length > 0
        })
      },
//      列表分组首字母
      ptoe (letter) {
        if (letter.length > 0) {
          let letters = pinyin.getFullChars(letter[0].name)
          return letters.substring(0, 1).toUpperCase()
        }
      },
//      进入列表项
      intoProfile (id) {
        this.$emit('intoListProfile', id)
      }
    },
    props: ['list']
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-indexsection-index
    color #ccc
    font-size 12px

  .indexList-wrapper
    & > .list-content
      width 100%
      & > .index
        display block
        line-height 16px
        padding 0 .24rem
        background #f0f0f0
        color #989898
        font-size 12px
      & > .list-content-box
        & > .list-item
          padding .36rem
          font-size 16px
          &:not(:last-child)
            border-bottom 1px solid #f0f0f0
</style>
