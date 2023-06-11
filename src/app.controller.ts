import {join} from 'path';
import {createReadStream} from 'fs';
import {Controller, Get, Param, StreamableFile} from '@nestjs/common';

import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('methods')
  getMethods() {
    return this.appService.getMethods();
  }

  @Get('methods/:id')
  getMethod(@Param() params: {id: string}) {
    return this.appService.getMethod(params.id);
  }

  @Get('img/:id')
  getImage(@Param() params: {id: string}) {
    const file = createReadStream(join(process.cwd(), `./src/img/${params.id}.png`));
    return new StreamableFile(file, {type: 'image/png'});
  }

  @Get('.well-known/pki-validation/669DE2CE8E65081EF3CF07307B58D574.txt')
  getSSL() {
    const file = createReadStream(join(process.cwd(), './secrets/669DE2CE8E65081EF3CF07307B58D574.txt'));
    return new StreamableFile(file);
  }
}
