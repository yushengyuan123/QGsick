import {submit} from "../api/submitTrack";

export function historyTrack(date, _this) {
  submit.getSickTrack(date).then((res) => {
    console.log(res)
    if (res.data.length !== 0) {

      let polyline = [{
        points: [],
        color: "#ff0000",
        width: 2,
        dottedLine: false
      }];

      for (let i = 0; i < res.data.length; i++) {
        polyline[0].points.push({
          longitude: Number(res.data[i].lon),
          latitude: Number(res.data[i].lat)
        })
      }

      _this.setData({
        polyline: polyline,
        longitude: res.data[0].lon,
        latitude: res.data[0].lat,
        scale: 20
      })
    }
  })
}
