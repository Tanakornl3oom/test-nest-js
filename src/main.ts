import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ValidationPipe } from './utils/validationPipe';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.use(bodyParser.json());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
