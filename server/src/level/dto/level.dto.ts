import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from "class-validator";
import { LevelType } from "src/types";

export class LevelDTO {
  @ApiProperty({ description: "Title of the Level" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60, {
    message: "text should be max 60 characters. ",
  })
  title: string;

  @ApiProperty()
  @IsEnum(LevelType)
  @IsNotEmpty()
  @MaxLength(15, {
    message: "text should be max 15 characters. ",
  })
  type: LevelType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120, {
    message: "text should be max 120 characters. ",
  })
  statement: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(500, {
    message: "text should be max 500 characters. ",
  })
  input: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(500, {
    message: "text should be max 500 characters. ",
  })
  output: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, {
    message: "text should be max 100 characters. ",
  })
  solution: string;
}
