/**
 * @author Yu Shengyuan
 * @description 时间格式转化
 */
export const DateFormat = function (time) {
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    return year + "-" + month + "-" + date + ' ' + time.getHours() + ':' + time.getMinutes()
}

