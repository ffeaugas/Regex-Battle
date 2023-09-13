import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/createChannel.dto';
import { UpdateLevelDto } from './dto/updateLevelDto';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get()
  getlevels(): any {
    return this.levelService.getLevels();
  }

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
