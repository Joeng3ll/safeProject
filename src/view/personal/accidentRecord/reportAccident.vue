<template>
  <div class="reportAccident-wrapper">
    <header class="header">
      <section class="msg icon-sec" @click="back">
        <span class="icon-box href-text">取消</span>
      </section>
      <section class="scan icon-sec">
        <span class="icon-box href-text" @click="commit">
          提交
        </span>
      </section>
    </header>
    <article class="body">
      <!--错误提示开始-->
      <p class="error-text">{{error}}</p>
      <!--错误提示结束-->
      <!--todo驾驶员姓名-->
      <mt-field label="车牌号" placeholder="" v-model="carNo" :readonly="readOnly"></mt-field>
      <mt-field label="事故地点" placeholder="事故发生地点" v-model="place"></mt-field>
      <!--事故发生时间开始-->
      <section class="picker-box time-box" @click="openDatePicker()">
        <span class="label">事故时间</span>
        <span class="label">{{time | formateTime(time)}}</span>
      </section>
      <mt-datetime-picker
        ref="picker"
        type="datetime"
        :endDate="new Date()"
        v-model="pickerTime"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        hourFormat="{value}时"
        minuteFormat="{value}分"
        @confirm="handleConfirm">
      </mt-datetime-picker>
      <!--事故发生时间结束-->
      <section class="picker-box">
        <span class="label">受伤人数</span>
        <mt-picker :slots="injuredNumSlots" @change="onInjuredValueChange" :visibleItemCount="visibleItemCount"
                   class="picker"></mt-picker>
      </section>
      <section class="picker-box">
        <span class="label">死亡人数</span>
        <mt-picker :slots="injuredNumSlots" @change="onDeadjuredValueChange" :visibleItemCount="visibleItemCount"
                   class="picker"></mt-picker>
      </section>
      <!--是否转弯 data1-->
      <section class="picker-box">
        <span class="label">转弯情况</span>
        <mt-picker :slots="swerverSlots" @change="onSwerverValueChange" :visibleItemCount="visibleItemCount"
                   class="picker"></mt-picker>
      </section>
      <!--制动情况 data2-->
      <section class="picker-box">
        <span class="label">制动情况</span>
        <mt-picker :slots="brakingSlots" @change="onBrakingValueChange" :visibleItemCount="visibleItemCount"
                   class="picker"></mt-picker>
      </section>
      <!--车辆承载情况 data3-->
      <section class="picker-box">
        <span class="label">承载情况</span>
        <mt-picker :slots="weightSlots" @change="onWeightValueChange" :visibleItemCount="visibleItemCount"
                   class="picker"></mt-picker>
      </section>
      <!--天气情况 data4-->
      <section class="picker-box">
        <span class="label">天气情况</span>
        <mt-picker :slots="whetherSlots" @change="onWhetherChange" :visibleItemCount="visibleItemCount"
                   class="picker"></mt-picker>
      </section>
      <!--是否超速 data5-->
      <section class="picker-box">
        <span class="label">超速情况</span>
        <mt-picker :slots="overSpeedSlots" @change="onOverSpeedValueChange" :visibleItemCount="visibleItemCount"
                   class="picker"></mt-picker>
      </section>
      <!--事故违规类别开始-->
      <section class="picker-box">
        <span class="label">违规类别</span>
        <mt-radio
          title=""
          v-model="selectTrafficType"
          :options="trafficTypeOptions">
        </mt-radio>
      </section>
      <!--事故违规类别结束-->
    </article>
    <loading ref="loadCpt"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Field, Picker, DatetimePicker, Radio, Toast} from 'mint-ui'
  import {getAccidentType, reportAccident} from '../../../service/getData'
  import {getUserInfo} from '../../../config/storage'
  import {formateAccidentDate} from '../../../common/js/Util'
  import Loading from '../../../components/loading/loading.vue'
  import Vue from 'vue'
  Vue.component(Field.name, Field)
  Vue.component(Picker.name, Picker)
  Vue.component(Radio.name, Radio)
  Vue.component(Toast.name, Toast)
  Vue.component(DatetimePicker.name, DatetimePicker)
  // todo 五种data类型根据服务器数据更新
  export default {
    data () {
      return {
//          最终要提交的事故
        accident: {
          driverId: 0,
          carNo: '',
          injuredNum: 0,
          deadNum: 0,
          injuredPlace: '',
          occureTimeStr: '',
          data1: '-1',
          data2: '-1',
          data3: '-1',
          data4: '-1',
          data5: '-1',
          trafficViolationTypeId: 0
        },
//        缓存中获得的驾驶员资料
        driver: {},
//        错误提示
        error: '',
//        车牌号
        carNo: '',
//        输入框是否是只读
        readOnly: false,
//        事故发生时间
        time: '',
//        事故发生地点
        place: '',
//        选择的交通事故违法类型
        selectTrafficType: '',
//        从后台获得的交通事故违反类型
        trafficViolationTypes: [],
//        picker选择器的默认时间
        pickerTime: '',
//        传入radio组件里的按钮选项组
        trafficTypeOptions: [],
//        picker中可见item数量
        visibleItemCount: 3,
//        传入受伤、死亡人数选择组件里的初始化数组
        injuredNumSlots: [
          {
            flex: 1,
            values: [0, 1, 2],
            className: 'slot1'
          }
        ],
//        传入转弯选择组件里的数组
        swerverSlots: [
          {
            flex: 1,
            values: ['未确认', '转弯', '直行'],
            className: 'slot1'
          }
        ],
        brakingSlots: [
          {
            flex: 1,
            values: ['未确认', '制动前', '制动后'],
            className: 'slot1'
          }
        ],
        weightSlots: [
          {
            flex: 1,
            values: ['未确认', '空车', '重车'],
            className: 'slot1'
          }
        ],
        whetherSlots: [
          {
            flex: 1,
            values: ['未确认', '晴天', '雨天', '雪天', '阴天', '雾霾'],
            className: 'slot1'
          }
        ],
        overSpeedSlots: [
          {
            flex: 1,
            values: ['未确认', '超速', '未超速'],
            className: 'slot1'
          }
        ]
      }
    },
    mounted () {
      this.driver = getUserInfo()
      this.accident.driverId = this.driver.userId
      this.$refs.loadCpt.openLoading()
      getAccidentType(this.driver.userId).then(res => {
        res = res.data
        this.carNo = res.carNo
        this.trafficViolationTypes = Object.assign([], res.trafficViolationTypes)
        this.trafficTypeOptions = this.trafficViolationTypes.map((item) => {
          return {
            label: item.valueStr,
            value: `${item.id}`
          }
        })
      }).then(() => {
        this.$refs.loadCpt.closeLoading()
      })
    },
    filters: {
      formateTime (time) {
        let str = time === '' ? '' : new Date(time).toLocaleString()
        return str
      }
    },
    computed: {
      injuredNumList () {
        let arr = []
        for (let i = 0; i < 31; i++) {
          arr.push(i)
        }
        return arr
      }
    },
    methods: {
//          返回
      back () {
        this.$router.go(-1)
      },
//      提交
      commit () {
        this.accident.carNo = this.carNo
        this.accident.injuredPlace = this.place
        this.accident.occureTimeStr = this.time
        this.accident.trafficViolationTypeId = this.selectTrafficType === '' ? 0 : parseInt(this.selectTrafficType)
        if (this.accident.driverId === 0 || this.accident.carNo === '' || this.accident.occureTimeStr === '' || this.accident.injuredPlace === '' || this.accident.trafficViolationTypeId === 0) {
          this.error = '信息填写不完整!!'
//          todo 对应错误
          return
        } else {
          this.error = ''
          let accidentId = 0
          reportAccident(this.accident).then(res => {
            accidentId = res.data.data
            this._initialToast()
            setTimeout(() => {
              this.$router.replace(`/accidentRecordContent/${accidentId}`)
            }, 500)
          })
        }
      },
      onInjuredValueChange (picker, value) {
//        console.log(value)
        picker.setSlotValues(0, this.injuredNumList)
        this.accident.injuredNum = value[0]
      },
      onDeadjuredValueChange (picker, value) {
//        console.log(value)
        picker.setSlotValues(0, this.injuredNumList)
        this.accident.deadNum = value[0]
      },
      onSwerverValueChange (picker, value) {
        let str = value[0]
        let state = 0
        switch (str) {
          case '转弯':
            state = 0
            break
          case '直行':
            state = 1
            break
          default:
            state = -1
        }
        this.accident.data1 = state
      },
      onBrakingValueChange (picker, value) {
//        console.log(value)
        let str = value[0]
        let state = 0
        switch (str) {
          case '制动前':
            state = 0
            break
          case '制动后':
            state = 1
            break
          default:
            state = -1
        }
        this.accident.data2 = state
      },
      onWeightValueChange (picker, value) {
//        console.log(value)
        let str = value[0]
        let state = 0
        switch (str) {
          case '空车':
            state = 0
            break
          case '重车':
            state = 1
            break
          default:
            state = -1
        }
        this.accident.data3 = state
      },
      onWhetherChange (picker, value) {
//        console.log(value)
        let str = value[0]
        let state = 0
        switch (str) {
          case '晴天':
            state = 0
            break
          case '雨天':
            state = 1
            break
          case '雪天':
            state = 2
            break
          case '阴天':
            state = 3
            break
          case '雾霾':
            state = 4
            break
          default:
            state = -1
        }
        this.accident.data4 = state
      },
      onOverSpeedValueChange (picker, value) {
//        console.log(value)
        let str = value[0]
        let state = 0
        switch (str) {
          case '超速':
            state = 0
            break
          case '未超速':
            state = 1
            break
          default:
            state = -1
        }
        this.accident.data5 = state
      },
//      打开时间选择
      openDatePicker () {
        this.$refs.picker.open()
      },
      handleConfirm (value) {
        value = formateAccidentDate(value)
        this.time = value
      },
      //      提示框
      _initialToast () {
        let toast = Toast({
          message: '事故提交成功！!'
        })
        setTimeout(() => {
          toast.close()
        }, 500)
      }
    },
    components: {
      'loading': Loading
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .reportAccident-wrapper
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

    & > .body
      width 90%
      padding: 0.2rem 5% 1rem 5%
      position absolute
      top 1.1733rem
      & > .error-text
        padding .24rem
        color red
        text-align center
        font-size 16px
      & > .picker-box
        margin-bottom: .4rem
        & > .mint-radiolist
          vertical-align middle
          display inline-block
          width 60%
        & > .picker
          vertical-align middle
          display inline-block
          width 40%
        & > .label
          margin-right .2rem
          line-height: 24px
          font-size: 16px
          padding: .24rem
        &.time-box
          padding: .4rem 0
</style>
