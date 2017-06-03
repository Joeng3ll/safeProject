/**
 * Created by joeng on 2017/6/3.
 */
const USER_KEY = 'user'
const QUES_KEY = 'question'
export function setStorage(value) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(value))
}
export function getStorage() {
  return JSON.parse(window.localStorage.getItem(USER_KEY) || '')
}
export function setQuesTitleStorage(value) {
  window.localStorage.setItem(QUES_KEY, JSON.stringify(value))
}
export function getQuesTitleStorage() {
  return JSON.parse(window.localStorage.getItem(QUES_KEY) || '')
}
