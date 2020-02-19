/**
 * @author Yu Shengyuan
 * @description 用户登陆，记录用户所有登陆信息
 */
let userInfo = function() {
  let privateCode = null;
  let userId = null
  let isSick = null
  let Authorization = null

  function LoginWx() {
    return new Promise(((resolve, reject) => {
      wx.login({
        success(res) {
          setCode(res.code);
          resolve('设置code完毕')
        },
        fail() {
          reject('登陆错误')
        }
      });
    }))
  }

  function SetAuthorization(value) {
    Authorization = value
  }

  function getAuthorization() {
    console.log(Authorization)
    return Authorization
  }

  function setUserId(id) {
    userId = id
  }

  function getCode() {
    return privateCode
  }

  function setCode(code) {
    privateCode = code
  }

  function setSick(sick) {
    isSick = sick
  }

  function getUserInfo() {
    return {
      userId: userId,
      isSick: isSick,
    }
  }

  return {
    getCode: getCode,
    loginWx: LoginWx,
    setId: setUserId,
    setSick: setSick,
    setAuthorization: SetAuthorization,
    getAuthorization: getAuthorization,
    getUserInfo: getUserInfo

  }
}();

export const user = userInfo

