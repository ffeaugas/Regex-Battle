import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LevelModule } from "./level/level.module";
import { PrismaService } from "./prisma/prisma.service";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { UserService } from "./user/user.service";
import { AuthService } from "./auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { EventsModule } from "./events/events.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    LevelModule,
    UserModule,
    AuthModule,
    EventsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, PrismaService, UserService, AuthService, JwtService],
})
export class AppModule {}
