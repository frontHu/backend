import fetch from '.'

export function saveBlogApi(data) {
  return fetch('/blog/save', data)
}