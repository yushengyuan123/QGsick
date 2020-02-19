export function subscribe() {
  console.log('我执行了')
  wx.requestSubscribeMessage({
    tmplIds: ['8HT_C2z-egJ1p4CDwuapLH0lgl2YH89jIoYT25zlygw'],
    success (res) {
      console.log(res)
    },
    fail (error) {
      console.log(error)
    }
  })
}
