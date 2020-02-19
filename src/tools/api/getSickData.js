import { Request } from './RequstConfig';
import { getResData } from '../util/Response';

class getSickData extends Request {
  async getSickDate() {
    return await this.RegionData()
  }

  //查询接触历史记录
  async isContact() {
    return getResData(await this.getRequest('/core/contact'))
  }

  //用户实时风险
  async realRisk(data) {
    return getResData(await this.test('/core/risk', data))
  }

  //登陆
  async Login(code) {
    return getResData(await this.postRequest('/user/loginByWechat', code));
  }
}

export const GetSickData = new getSickData();
