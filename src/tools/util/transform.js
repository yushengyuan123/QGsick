import QQMapWX from '../../libs/qqmap-wx-jssdk';

let transform = function() {
  let qqmapsdk = new QQMapWX({ key: 'SKQBZ-WLQ66-C6QS4-M3EBB-TMVQJ-6JFM6' });
  let lat = '';
  let lng = '';

  function transformAddress(address, _this) {
    console.log(address)
    return new Promise(((resolve, reject) => {
      qqmapsdk.geocoder({
        //获取表单传入地址
        address: address, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
        success: function(res) {//成功后的回调
          console.log(res);
          let result = res.result;
          _this.setData({
            longitude: result.location.lng,
            latitude: result.location.lat
          })
          resolve({
            lat: result.location.lat,
            lng:  result.location.lng
          })
        },
        fail: function(error) {
          reject(error)
          console.error(error);
        },
        complete: function(res) {
          console.log(res);
        }
      });
    }))
  }

  return {
    getPoint: transformAddress
  };
}();

export let geocoder = transform


