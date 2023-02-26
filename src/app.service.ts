import {Injectable} from '@nestjs/common';

import {getMethods} from './db';

@Injectable()
export class AppService {
  async getHello() {
    const methods = await getMethods();
    console.log(methods);
    return methods;
  }
}
