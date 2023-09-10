import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateLevelDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15, {
    message: 'text should be max 15 characters. ',
  })
  result: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15, {
    message: 'text should be max 15 characters. ',
  })
  text: string;
}
