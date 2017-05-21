/**
 * Created by joeng on 2017/5/19.
 */
let template = {
  'transport_record': {
    "driver_id": 1,
    "year": 2017,
    "month": 5,
    "work_hour": 8,
    // 年工时
    "year_hour": 480,
    // 月工时
    "month_hour": 24,
    "attendance_days": [
      {
        date: '17日-星期三',
        work_time: '09:11:04',
        leave_time: '17:11:07',
        check_time: '8小时'
      },
      {
        date: '17日-星期四',
        work_time: '09:00:04',
        leave_time: '16:11:07',
        check_time: '7小时'
      }, {
        date: '17日-星期五',
        work_time: '09:11:04',
        leave_time: '17:11:07',
        check_time: '8小时'
      }, {
        date: '17日-星期六',
        work_time: '09:11:04',
        leave_time: '17:11:07',
        check_time: '8小时'
      }, {
        date: '17日-星期日',
        work_time: '09:11:04',
        leave_time: '17:11:07',
        check_time: '8小时'
      }
    ]
  }
}
export default template
