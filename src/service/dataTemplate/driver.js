var Mock = require('mockjs')
var template =
  {
    "id": "1",
    "name": "张三",
    "birth_place": "浙江",
    "birth": "2017-05-17",
    "sfz_no": "1",
    "star_level": 4,
    "address": "浙江绍兴",
    "postcode": "303303",
    "mobile": "17826808043",
    "email": "2726@qq.com",
    "photo": "http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg",
    "driver_licence_photo": "http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg",
    "org_id": "1",
    "emergency_contact": "父亲",
    "emergency_contact_mobile": "17826808043",
    "drive_licence_no": "浙A888888",
    "drive_licence_start_time": "2017-02-15",
    "drive_licence_end_time": "2017-05-17",
    "safe_centificate_no": "4",
    "safe_centificate_start_time": "2017-03-21",
    "safe_centificate_end_time": "2017-05-18",
    "status": "1"
  }

var driverInfo = Mock.mock(template)
export default driverInfo;

/eslint-disable/
