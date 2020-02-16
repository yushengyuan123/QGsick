/**
 * @author Yu Shengyuan
 * @description 生成地图类，方便以后其他地图相关操作从这里继承地图实例
 */
export class getLocation {
  _longitude = null;
  _latitude = null;

  getLocation(_this) {
    wx.getLocation({
      type: 'gcj02',//默认wgs84是全球定位系统获取的坐标，gcj02是国家测绘局给出的坐标
      success: (res) => {
        console.log(res)
        console.log('经度' + res.longitude + '，纬度' + res.latitude);
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  }

  //每5分钟获取一次用户的地理位置
  circularGetLocation(_this) {
    setInterval(() => {
      this.getLocation(_this)
    }, 5000)
  }

}

export const Location = new getLocation();

