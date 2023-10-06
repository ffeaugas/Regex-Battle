import { Module } from "@nestjs/common";
import { LevelService } from "./level.service";
import { LevelController } from "./level.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule],
  providers: [LevelService, JwtService],
  controllers: [LevelController],
})
export class LevelModule {}
