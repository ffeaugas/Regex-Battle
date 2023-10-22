import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { LevelService } from "./level.service";
import { LevelDTO } from "./dto/level.dto";
import { LevelUpdateDTO } from "./dto/level-update.dto";
import { Level } from "@prisma/client";
import { AuthGuard } from "src/auth/guards/auth.guards";
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("Level")
// @ApiBearerAuth()
// @UseGuards(AuthGuard)
@Controller("level")
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get()
  getLevels(): Promise<Level[]> {
    return this.levelService.getAll();
  }

  @Get("/tutorial")
  getTutorialLevels(): Promise<Level[]> {
    return this.levelService.getTutorial();
  }

  @ApiResponse({ status: 201, description: "Level successfully created" })
  @ApiConflictResponse({ description: "Level title already used" })
  @ApiForbiddenResponse({ description: "Invalid regex solution" })
  @Post()
  createLevel(@Body() level: LevelDTO) {
    return this.levelService.createOne(level);
  }

  @Delete(":/id")
  deleteLevel(
    @Param("id") id: number
  ): Promise<{ deleted: boolean; message?: string }> {
    return this.levelService.deleteOne(id);
  }

  @Patch(":/id")
  updateLevel(@Param("id") id: number, @Body() level: LevelUpdateDTO) {
    return this.levelService.updateOne(id, level);
  }
}
