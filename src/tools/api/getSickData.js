import {Request} from './RequstConfig';
import {getResData} from '../util/Response';

class getSickData extends Request{
  async getSickDate() {
    console.log('我调用了')
        return getResData(await this.getRequest())
  }
}

export const GetSickData = new getSickData()
