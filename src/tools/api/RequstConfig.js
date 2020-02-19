import axios from 'axios'
import {user} from "../util/Login";


let region = 'https://oss.mapmiao.com/others/ncov/data.json?timestamp=999999999999999'
let target_url = 'http://39.98.41.126:3619'


export class Request {
  RegionData() {
    return new Promise(((resolve, reject) => {
      wx.request({
        url: region, //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json', // 默认值
          'Authorization': user.getAuthorization()
        },
        method: 'GET',
        success (res) {
          resolve(res.data)
        },
        fail (error) {
          reject(error)
        }
      })
    }))
  }

  test(url, data) {
    console.log(data)
    return new Promise(((resolve, reject) => {
      wx.request({
        url: target_url + url,
        method: 'GET',
        header: {
          "Content-Type": "application/json",
          'Authorization': user.getAuthorization()
        },
        data: {
          "time": "2020-2-9 10:22",
          "lon": "11.11",
          "lat": "11.11"
        },
        success (res) {
          resolve(res.data)
        },
        fail (error) {
          reject(error)
        }
      })
    }))
  }

  postRequest(url,data) {
    return new Promise(((resolve, reject) => {
      wx.request({
        url: target_url + url,
        data: JSON.stringify(data),
        header: {
          'content-type': 'application/json',
          'Authorization': user.getAuthorization()
        },
        method:'POST',
        success (res) {
          if(user.getAuthorization() === null) {
            user.setAuthorization(res.header.Authorization)
            console.log(user.getAuthorization())
          }
          resolve(res.data)
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
          'content-type': 'application/json', // 默认值
          'Authorization': user.getAuthorization()
        },
        method: 'GET',
        success (res) {
          resolve(res.data)
        },
        fail (error) {
          reject(error)
        }
      })
    }))
  }
}
