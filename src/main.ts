import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import dataSource from './config/typeorm.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await dataSource.initialize();

  await app.listen(3000);

  console.log(`--------- Application starts ---------`);
  console.log(`--------------------------------------`);
  console.log(`Listening on port: ${port}`);
}
bootstrap();
