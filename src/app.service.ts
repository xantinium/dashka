import {Injectable} from '@nestjs/common';

type MethodType = {
  id: string;
  title: string;
  desc: string;
};

const methods: MethodType[] = [
  {
      id: '1',
      title: 'Метод 1',
      desc: 'Это супер-пупер метод, наверное'
  }
];

@Injectable()
export class AppService {
  getHello() {
    return methods;
  }
}
