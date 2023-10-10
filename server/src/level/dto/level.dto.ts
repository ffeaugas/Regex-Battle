import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class LevelDTO {
  @ApiProperty({ description: "Title of the Level" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60, {
    message: "text should be max 60 characters. ",
  })
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(15, {
    message: "text should be max 15 characters. ",
  })
  type: string;

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
