import axios from 'axios'
// import queryString from './../untils/querysting'

const base_url = '/api'

export default function fetch(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(base_url + url, data, {
      headers: {}
    }).then(res => {
      if(res.data.code === 200) {
        resolve(res.data.data)
      }else {
        resolve(res.data)
      }
    }).catch(err => {
      switch(err.response.status) { 
        default:
          alert('网络异常')
      }
    })
  })
}