import {Injectable} from '@nestjs/common';

import {MethodType, MethodItemType} from './types';
import * as method_1 from './data/1.json';

const METHODS: MethodType[] = [
  method_1
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
