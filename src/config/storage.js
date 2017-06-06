/**
 * Created by joeng on 2017/6/3.
 */
const USER_KEY = 'user'
const QUES = "question"
const QUESTITLE_KEY = 'question_title'
const QUESTITLE_CONTENT = 'question_content'
export function setStorage(value) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(value))
}
export function getStorage() {
  return JSON.parse(window.localStorage.getItem(USER_KEY) || null)
}
export function setQuesTitleStorage(value) {
  window.localStorage.setItem(QUESTITLE_KEY, JSON.stringify(value))
}
export function getQuesTitleStorage() {
  return JSON.parse(window.localStorage.getItem(QUESTITLE_KEY) || null)
}
export function setQuesContentStorage(value) {
  window.localStorage.setItem(QUESTITLE_CONTENT, JSON.stringify(value))
}
export function getQuesContentStorage() {
  return JSON.parse(window.localStorage.getItem(QUESTITLE_CONTENT) || null)
}
export function setQuesStorage(value) {
  let originSource = getQuesStorage()
  let target = Object.assign(originSource, {value})
  window.localStorage.setItem(QUES, JSON.stringify(target))
}
export function getQuesStorage() {
  let emptyObj = new Object()
  return window.localStorage.getItem(QUES || emptyObj)
}
