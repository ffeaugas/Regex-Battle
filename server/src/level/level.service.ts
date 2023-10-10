import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { LevelDTO } from "./dto/level.dto";
import { Level } from "@prisma/client";
import { isRegexSolutionCorrect } from "./utils";
import { PrismaService } from "../prisma/prisma.service";
import { LevelUpdateDTO } from "./dto/level-update.dto";

@Injectable()
export class LevelService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Level[]> {
    const levels = await this.prisma.level.findMany();
    return levels;
  }

  async createOne(level: LevelDTO) {
    const isExistingLevel = await this.prisma.level.findUnique({
      where: { title: level.title },
    });
    if (isExistingLevel)
      throw new ConflictException("This level title already exists");
    if (
      !isRegexSolutionCorrect(
        level.type,
        level.input,
        level.output,
        level.solution
      )
    )
      throw new ForbiddenException("Solution doesn't match the output");
    const createDefaultLevel = await this.prisma.level.create({
      data: level,
    });
    return createDefaultLevel;
  }

  async deleteOne(id: number): Promise<{ deleted: boolean; message?: string }> {
    try {
      await this.prisma.level.delete({ where: { id } });
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }

  async updateOne(id: number, level: LevelUpdateDTO): Promise<Level> {
    return this.prisma.level.update({
      data: level,
      where: { id },
    });
  }
}
