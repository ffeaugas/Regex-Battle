import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

const prisma = new PrismaService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  const createDefaultLevel = await prisma.level.create({
    data: {
      text: 'lololololol',
      result: 'o',
    },
  });
  await app.listen(3001);
}
bootstrap();
