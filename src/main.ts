import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Restaurant Management')
    .setDescription('Restaurant management api description')
    .setVersion('1.0')
    .addTag('Restaurant')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doocuments', app, document);

  await app.listen(8080);
}
bootstrap();
