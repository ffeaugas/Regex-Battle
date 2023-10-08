import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateLevelDto } from "./dto/createChannel.dto";
import { UpdateLevelDto } from "./dto/updateLevelDto";
import { Level } from "@prisma/client";
import { isRegexSolutionCorrect } from "./utils";

@Injectable()
export class LevelService {
  constructor(private readonly prisma: PrismaService) {}

  async getLevels(): Promise<Level[]> {
    const levels = await this.prisma.level.findMany();
    return levels;
  }

  async createLevel(dto: CreateLevelDto) {
    const isExistingLevel = await this.prisma.level.findUnique({
      where: { title: dto.title },
    });
    if (isExistingLevel)
      throw new ConflictException("This level title already exists");
    if (!isRegexSolutionCorrect(dto.type, dto.input, dto.output, dto.solution))
      throw new ForbiddenException(
        "Solution provided doesn't match the output"
      );
    const createDefaultLevel = await this.prisma.level.create({
      data: {
        title: dto.title,
        type: dto.type,
        statement: dto.statement,
        input: dto.input,
        output: dto.output,
        solution: dto.solution,
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
      where: { title: dto.title },
      data: { [dto.formField]: dto.updatedField },
    });
    console.log("TROUVER : ", updatedLevel);
  }
}
