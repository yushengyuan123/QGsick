import { Request } from './RequstConfig';
import { getResData } from '../util/Response';

class getSickData extends Request {
  async getSickDate() {
    return getResData(await this.getRequest());
  }

  async Login() {
    return getResData(await this.getRequest());
  }
}

export const GetSickData = new getSickData();
