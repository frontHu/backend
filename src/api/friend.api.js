import fetch from './index'

export function addFriend(data) {
  return fetch('/friend/add', data)
}