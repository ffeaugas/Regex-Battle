import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaService } from "./prisma/prisma.service";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

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

  const config = new DocumentBuilder()
    .addSecurity("bearer", {
      type: "http",
      scheme: "bearer",
    })
    .setTitle("Regex Battle API")
    .setDescription("The API description of the Regex Battle server")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  /*Default objects created */

  // const createDefaultLevel = await prisma.level.create({
  //   data: {
  //     text: "lololololol",
  //     result: "o",
  //   },
  // });

  /* ----------------------- */

  await app.listen(3001);
}
bootstrap();
