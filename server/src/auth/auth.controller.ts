/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards, Req } from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/user.dto";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/login.dto";
import { AuthService } from "./auth.service";
import { RefreshGuard } from "./guards/refresh.guards";

@Controller("auth")
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Post("register")
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Post("login")
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }

  @UseGuards(RefreshGuard)
  @Post("refresh")
  async refreshToken(@Req() req: any) {
    return await this.authService.refreshToken(req.user);
  }
}
