import { PartialType } from "@nestjs/swagger";
import { LevelDTO } from "./level.dto";

export class LevelUpdateDTO extends PartialType(LevelDTO) {}
