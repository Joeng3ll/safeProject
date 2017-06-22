/**
 * Created by joeng on 2017/6/17.
 */
function formateDate(date) {
  return new Date(date).toLocaleString()
}
function formateAccidentDate(date) {
  //date为字符串
  date = new Date(date)
  let str = ''
  let month = `${date.getMonth() + 1}`
  month = month.length === 1 ? `0${month}` : month
  let day = `${date.getDate()}`
  day = day.length === 1 ? `0${day}` : day
  let hour = `${date.getHours()}`
  hour = hour.length === 1 ? `0${hour}` : hour
  let min = `${date.getMinutes()}`
  min = min.length === 1 ? `0${min}` : min
  str += `${date.getFullYear()}/${month}/${day} ${hour}:${min}`
  return str
}
export {formateDate, formateAccidentDate}
