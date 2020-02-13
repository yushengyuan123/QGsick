import axios from 'axios'


let target_url = 'https://oss.mapmiao.com/others/ncov/data.json?timestamp=999999999999999'

export class Request {
  postRequest(url, data) {
    return new Promise(((resolve, reject) => {
      wx.request({
        url: target_url + url, //仅为示例，并非真实的接口地址
        data: JSON.stringify(data),
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          resolve(res)
        },
        fail (error) {
          reject(error)
        }
      })
    }))
  }

  getRequest(url) {
    return new Promise(((resolve, reject) => {
      wx.request({
        url: target_url + url, //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          resolve(res)
        },
        fail (error) {
          reject(error)
        }
      })
    }))
  }
}
