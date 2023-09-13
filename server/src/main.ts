import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaService } from "./prisma/prisma.service";
import { ValidationPipe } from "@nestjs/common";

const prisma = new PrismaService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  /*Default objects created */

  const createDefaultLevel = await prisma.level.create({
    data: {
      text: "lololololol",
      result: "o",
    },
  });

  /* ----------------------- */

  await app.listen(3001);
}
bootstrap();
