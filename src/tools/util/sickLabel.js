/**
 * @author Yu Shengyuan
 * @description 地图生成患病区域的label
 * @param 疫情发生地坐标
 */
import { getLocation } from './getLocation';

class sickLabel extends getLocation {
  sickInfo = null
  //绘制疫情区域
  drawRegion(data, site, _this) {
    let singleRegion = {
      points: [],
      strokeColor: '#DC143C',
      strokeWidth: 3
    };
    let array = [];
    // let obj = {};
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].name)
      // console.log(site.city)
      if(data[i].name === site.city) {
        console.log('我进去了')
        // obj = {};
        for (let j = 0; j < data[i].pois.length; j++) {
          singleRegion = {
            points: [],
            strokeColor: '#5CA2FA',
            strokeWidth: 3
          };
          for (let k = 0; k < data[i].pois[j].geometry.coordinates[0].length; k++) {
            singleRegion.points.push({
              longitude: Number(data[i].pois[j].geometry.coordinates[0][k][0]),
              latitude: Number(data[i].pois[j].geometry.coordinates[0][k][1])
            });
          }
          if(singleRegion.points.length !== 0) {
            array.push(singleRegion);
          }
          // obj['polygons[' + array.length + ']'] = singleRegion;
          singleRegion = null;
        }
        _this.setData({
          polygons: array
        })
        return array
      }
    }
    wx.showToast({
      title: '查询无果',
      icon: 'none',
    })
    return false
  }

  //打出疫情发生地的makers
  setMarker(data, site, _this) {
    let temp = [];
    let singleCenter = {
      iconPath: '../image/地图.png',
      id: 0,
      latitude: '',
      longitude: '',
      width: 35,
      height: 45
    };

    for (let i = 0; i < data.length; i++) {
      if(data[i].name === site.city) {
        console.log('我进入了maker')
        for (let j = 0; j < data[i].pois.length; j++) {
          singleCenter = {
            iconPath: '',
            id: 0,
            latitude: '',
            longitude: '',
            width: 35,
            height: 45
          };

          singleCenter.latitude = Number(data[i].pois[j].point.coordinates[1]);
          singleCenter.longitude = Number(data[i].pois[j].point.coordinates[0]);
          temp.push(singleCenter);

          singleCenter = null
        }
      }
    }
    _this.setData({
      markers: temp
    })

    return temp;
  }

}

export const mapDraw = new sickLabel();

