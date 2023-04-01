import {readFileSync} from 'fs';
import {NestFactory} from '@nestjs/core';
import {RequestMethod} from '@nestjs/common';

import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: readFileSync('./secrets/private.key'),
      cert: readFileSync('./secrets/certificate.crt'),
      ca: readFileSync('./secrets/ca_bundle.crt'),
    },
  });
  app.setGlobalPrefix('api', {
    exclude: [
      {path: '.well-known/pki-validation/1993448A256C5A60A69172FD32253BC7.txt', method: RequestMethod.GET}
    ],
  });
  await app.listen(80);
}

bootstrap();
