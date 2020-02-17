import { Request } from './RequstConfig';
import { getResData } from '../util/Response';

class getSickData extends Request {
  async getSickDate() {
    return getResData(await this.getRequest());
  }

  //查询是否为密切接触者
  async isContact() {
    return getResData(await this.getRequest('/core/contact'))
  }

  async Login() {
    return getResData(await this.getRequest());
  }
}

export const GetSickData = new getSickData();
