import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Games - Cadastro')
    .setDescription('Portal de games. Seja bem vindo !')
    .setVersion('1.0.1')
    .addTag('status')
    .addTag('auth')
    .addTag('user')
    .addTag('profile')
    .addTag('game')
    .addTag('gender')
    .addTag('profile-games')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
