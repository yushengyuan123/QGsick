import { Request } from './RequstConfig';
import { getResData } from '../util/Response';

class getSickData extends Request {
  async getSickDate() {
    return getResData(await this.getRequest());
  }

  //查询是否为密切接触者
  async isContact(data) {
    return getResData(await this.postRequest('/core/contact', data))
  }

  //用户实时风险
  async realRisk() {
    return getResData(await this.getRequest('/core/risk'))
  }

  //风险量化
  async quantifyRisk() {
    return getResData(await this.getRequest('/core/quantificat'))
  }


  async Login(code) {
    return getResData(await this.postRequest('/user/loginByWechat', code));
  }
}

export const GetSickData = new getSickData();
