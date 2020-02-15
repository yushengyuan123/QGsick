/**
 * @author Yu Shengyuan
 * @description 地图生成患病区域的label
 * @param 疫情发生地坐标
 */
import { getLocation } from './getLocation';

class sickLabel extends getLocation {
  //绘制疫情区域
  drawRegion(data, _this) {
    console.log('fuck')
    let singleRegion = {
      points: [],
      strokeColor: '#DC143C',
      strokeWidth: 3,
    };
    let array = [];
    let obj = {}
    for (let i = 0; i < data.length; i++) {
      obj = {}
      for (let j = 0; j < data[i].pois.length; j++) {
        singleRegion = {
          points: [],
          strokeColor: '#DC143C',
          strokeWidth: 3,
        };
        for (let k = 0; k < data[i].pois[j].geometry.coordinates[0].length; k++) {
          singleRegion.points.push({
            longitude: data[i].pois[j].geometry.coordinates[0][k][0],
            latitude: data[i].pois[j].geometry.coordinates[0][k][1]
          });
        }
        obj['polygons[' + array.length + ']'] = singleRegion
        array.push(singleRegion)
        singleRegion = null
      }
      // _this.setData(obj)
    }
    // _this.setData({
    //   'polygons': array
    // })
    return array
  }

  //打出疫情发生地的makers
  divisionLoad(data, _this) {

  }

}

export const mapDraw = new sickLabel();

