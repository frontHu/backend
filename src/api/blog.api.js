import fetch from './index'

export function saveBlogApi(data) {
  return fetch('/blog/save', data)
}

export function getBlogList(data) {
  return fetch('/blog/all', data)
}

export function deleteBlog(id) {
  return fetch('/blog/delete', id)
}