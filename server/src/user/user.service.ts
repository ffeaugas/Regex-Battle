/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConflictException, Injectable, UseGuards } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/user.dto";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (user) throw new ConflictException("Email already used");
    const newUser = await this.prisma.user.create({
      data: { ...dto, password: await hash(dto.password, 10) },
    });
    const { password, ...result } = newUser;
    return result;
  }

  async getUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email: email },
    });
  }

  async getUserProfile(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    delete user?.password;
    return user;
  }
}
