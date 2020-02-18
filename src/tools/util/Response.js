export function getResData(data) {
    if(data.code === 1) {
      return {
        isSuccess: true,
        data: data.data ? data.data : null,
        message: data.message ? data.message : null
      }
    } else {
      return {
        isSuccess: false,
        message: data.message ? data.message : null,
      }
    }
}

