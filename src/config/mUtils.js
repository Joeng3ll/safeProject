/**
 * Created by joeng on 2017/5/10.
 *
 * localStorage
 */
import {getContact, getUserAccount} from './storage'
import {loginIn} from '../service/getData'

// 通过id获取保存在localStorage中的联系人信息
export function getContactById(id) {
  let contact = getContact()
  let contactObj = null
  contact.forEach((item, index) => {
    if (item.id === id) {
      contactObj = Object.assign(item)
    }
  })
  return contactObj
}

// 登录状态超过八小时会过期，所以需要利用localStorage中的登录信息进行再次登录

export function loginAgain() {
  let user = getUserAccount()
  if (user !== null) {
    loginIn(user)
  }
}

