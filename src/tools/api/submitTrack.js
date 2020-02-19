import {Request} from './RequstConfig';
import { getResData } from '../util/Response';

class SubmitTrack extends Request{
  //提交患者轨迹数据
  async submitTrack(data) {
    return getResData(await this.postRequest('/core/sickdata', data))
  }

  //获取患者时空轨迹
  async getSickTrack() {
    return getResData(await this.getRequest('/core/listSickdata'))
  }
}

export const submit = new SubmitTrack()
