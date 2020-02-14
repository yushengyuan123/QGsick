/**
 * @author Yu Shengyuan
 * @description 生成地图类，方便以后其他地图相关操作从这里继承地图实例
 */
import amapFile from '../../libs/amap-wx'
class GenerateMap {
  MapInstance = new amapFile.AMapWX({ key: '2ecefbebf40f879558c57c72032c153e' })
  _longitude = null
  _latitude = null
  _markersData = null

  createMap(_this) {
    let that = this
    this.MapInstance.getPoiAround({
      // iconPathSelected: '选中 marker 图标的相对路径', //如：..­/..­/img/marker_checked.png
      // iconPath: '未选中 marker 图标的相对路径', //如：..­/..­/img/marker.png
      success: function(mapData) {
        that.markersData = mapData.markers;
        that._latitude = that.markersData[0].latitude
        that._longitude = that.markersData[0].longitude
        _this.setData({
          markers: that.markersData
        });
        _this.setData({
          latitude: that.markersData[0].latitude
        });
        _this.setData({
          longitude: that.markersData[0].longitude
        });
        // that.showMarkerInfo(that.markersData, 0);
      },

      fail: function(info) {
        wx.showModal({ title: info.errMsg });
      }
    });
  }

  getPosition() {
    return {
      latitude: this._latitude,
      longitude: this._longitude
    }
  }

}

export const map = new GenerateMap()
