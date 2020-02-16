/**
 * @author Yu Shengyuan
 * @description 用户登陆，记录用户所有登陆信息
 */
let userInfo = function() {
  let privateCode = null;

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

  function getCode() {
    return privateCode
  }

  function setCode(code) {
    privateCode = code
  }

  return {
    getCode: getCode,
    loginWx: LoginWx
  }
}();

export const user = userInfo

