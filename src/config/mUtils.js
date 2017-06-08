/**
 * Created by joeng on 2017/5/10.
 *
 * localStorage
 */
import {getContact} from './storage'

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
