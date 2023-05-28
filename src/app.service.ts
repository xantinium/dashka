import {Injectable} from '@nestjs/common';

import {MethodType, MethodItemType} from './types';
import * as method_1 from './data/1.json';
import * as method_2 from './data/2.json';
import * as method_3 from './data/3.json';
import * as method_4 from './data/4.json';
import * as method_5 from './data/5.json';
import * as method_6 from './data/6.json';
import * as method_7 from './data/7.json';
import * as method_8 from './data/8.json';

const METHODS: MethodType[] = [
  method_1,
  method_2,
  method_3,
  method_4,
  method_5,
  method_6,
  method_7,
  method_8,
];

@Injectable()
export class AppService {
  async getMethods(): Promise<MethodItemType[]> {
    return METHODS.map((item) => ({
      id: item.id,
      title: item.title,
    }));
  }
  async getMethod(id: string): Promise<MethodType> {
    return METHODS.find((item) => item.id === id);
  }
}
