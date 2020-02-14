export function getResData(data) {
    if(data.code === -1) {
      alert(data.message)
      return {
        isSuccess: false,
        message: data.message ? data.message : null
      }
    } else {
      return {
        isSuccess: true,
        data: data.data ? data.data : null,
        message: data.message ? data.message : null
      }
    }
}

