/**
 * @author Yu Shengyuan
 * @description 生成地图类，方便以后其他地图相关操作从这里继承地图实例
 */
import amapFile from '../../libs/amap-wx'
import {submit} from "../api/submitTrack";
import {DateFormat} from "./DateFormat";
import {user} from "./Login";
import {GetSickData} from "../api/getSickData";

export class getLocation {
  _longitude = null;
  _latitude = null;
  _province = null
  _city = null

  getLocation() {
    return new Promise(((resolve, reject) => {
      wx.getLocation({
        type: 'gcj02',//默认wgs84是全球定位系统获取的坐标，gcj02是国家测绘局给出的坐标
        success: (res) => {
          console.log(res)
          console.log('经度' + res.longitude + '，纬度' + res.latitude);
          resolve({
            longitude: res.longitude,
            latitude: res.latitude
          })
        },
        fail: (error) => {
          reject(error)
        }
      })
    }))
  }

  //每5分钟获取一次用户的地理位置
  circularGetLocation() {
    // setInterval(() => {
    this.getLocation().then((res) => {
      let data = {
        "time": DateFormat(new Date()),
        "lon": res.longitude.toString(), // 经度
        "lat": res.latitude.toString()  // 纬度
      }
      GetSickData.realRisk(data).then((res) => {
        console.log(res)
      })

    })
    // }, 5000)
  }

  getSite() {
    let that = this

    let myAmapFun = new amapFile.AMapWX({key: '2ecefbebf40f879558c57c72032c153e'});

    return new Promise(((resolve, reject) => {
      myAmapFun.getRegeo({
        success: function (data) {
          that._province = data[0].regeocodeData.addressComponent.province
          that._city = data[0].regeocodeData.addressComponent.city
          console.log(that._province)
          console.log(that._city)
          resolve({
            province: data[0].regeocodeData.addressComponent.province,
            city: data[0].regeocodeData.addressComponent.city,
          })
        },
        fail: function (info) {
          reject(info)
        }
      })
    }))
  }

}

export const Location = new getLocation();

