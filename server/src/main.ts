import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaService } from "./prisma/prisma.service";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { LevelType } from "./types";

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

  const tutoLevelsCount = await prisma.level.count({
    where: { tutorial: true },
  });
  if (!tutoLevelsCount) {
    const createDefaultLevel1 = await prisma.level.create({
      data: {
        title: "Tutorial lvl1",
        type: LevelType.MATCHONE,
        tutorial: true,
        statement: "Find the lol",
        input: "lul lil lol",
        output: "lol",
        solution: "lol",
      },
    });
    const createDefaultLevel2 = await prisma.level.create({
      data: {
        title: "Tutorial lvl2",
        type: LevelType.MATCHONE,
        tutorial: true,
        statement: "Find the prout",
        input: "prrrrrt praaaat prooooout",
        output: "prooooout",
        solution: "pro{1,}ut",
      },
    });
    const createDefaultLevel3 = await prisma.level.create({
      data: {
        title: "Tutorial lvl3",
        type: LevelType.MATCHONE,
        tutorial: true,
        statement: "On more tmp exemple",
        input: "tmpppppppp tmp",
        output: "tmp",
        solution: "tmp",
      },
    });
  }

  /* ----------------------- */

  await app.listen(3001);
}
bootstrap();
