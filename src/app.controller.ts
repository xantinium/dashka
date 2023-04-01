import {join} from 'path';
import {createReadStream} from 'fs';
import {Controller, Get, Param, Query, StreamableFile} from '@nestjs/common';

import {AppService} from './app.service';
import {QueryParams} from './types';

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

  @Get('images/:id')
  getImage(@Param() params: {id: string}, @Query() query: QueryParams) {
    const path = `./images/${params.id}/${query.theme}/${query.id}.png`;
    const file = createReadStream(join(process.cwd(), path));
    return new StreamableFile(file);
  }

  @Get('.well-known/pki-validation/1993448A256C5A60A69172FD32253BC7.txt')
  getSSL() {
    const file = createReadStream(join(process.cwd(), './secrets/1993448A256C5A60A69172FD32253BC7.txt'));
    return new StreamableFile(file);
  }
}
