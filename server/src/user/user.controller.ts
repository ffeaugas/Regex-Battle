import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "src/auth/guards/auth.guards";

@UseGuards(AuthGuard)
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get(":id")
  async getUserProfile(@Param("id") id: number) {
    return await this.userService.getUserProfile(id);
  }
}
