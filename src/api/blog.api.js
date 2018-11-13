import fetch from './index'

export function saveBlogApi(data) {
  return fetch('/blog/save', data)
}