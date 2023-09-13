import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateLevelDto } from "./dto/createChannel.dto";
import { UpdateLevelDto } from "./dto/updateLevelDto";

@Injectable()
export class LevelService {
  constructor(private readonly prisma: PrismaService) {}
  async getLevels() {
    const levels = await this.prisma.level.findMany();
    console.log(levels);
    return levels;
  }

  async createLevel(dto: CreateLevelDto) {
    const createDefaultLevel = await this.prisma.level.create({
      data: {
        text: dto.text,
        result: dto.result,
      },
    });
    return createDefaultLevel;
  }

  async deleteAll() {
    const deleteLevels = await this.prisma.level.deleteMany();
    return deleteLevels;
  }

  async updateLevel(dto: UpdateLevelDto) {
    const updatedLevel = await this.prisma.level.updateMany({
      where: { result: dto.oldResult },
      data: { result: dto.updatedResult },
    });
    console.log("TROUVER : ", updatedLevel);
  }
}
