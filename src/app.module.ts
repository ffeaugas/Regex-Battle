import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LevelModule } from './level/level.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [LevelModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
