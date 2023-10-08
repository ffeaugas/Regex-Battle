import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { LevelService } from "./level.service";
import { CreateLevelDto } from "./dto/createChannel.dto";
import { UpdateLevelDto } from "./dto/updateLevelDto";
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
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller("level")
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get()
  getlevels(): Promise<Level[]> {
    return this.levelService.getLevels();
  }

  @ApiResponse({ status: 201, description: "Level successfully created" })
  @ApiConflictResponse({ description: "Level title already used" })
  @ApiForbiddenResponse({ description: "Invalid regex solution" })
  @Post()
  createLevel(@Body() dto: CreateLevelDto) {
    return this.levelService.createLevel(dto);
  }

  @Delete()
  deleteAll() {
    return this.levelService.deleteAll();
  }

  @Patch()
  updateLevel(@Body() dto: UpdateLevelDto) {
    return this.levelService.updateLevel(dto);
  }
}
