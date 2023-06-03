import {readFileSync} from 'fs';
import {NestFactory} from '@nestjs/core';
import {RequestMethod} from '@nestjs/common';

import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // httpsOptions: {
    //   key: readFileSync('./secrets/private.key'),
    //   cert: readFileSync('./secrets/certificate.crt'),
    //   ca: readFileSync('./secrets/ca_bundle.crt'),
    // },
  });
  app.setGlobalPrefix('api', {
    exclude: [
      {path: '.well-known/pki-validation/669DE2CE8E65081EF3CF07307B58D574.txt', method: RequestMethod.GET}
    ],
  });
  await app.listen(80);
}

bootstrap();
