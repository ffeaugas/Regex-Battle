import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateLevelDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15, {
    message: 'result should be max 15 characters. ',
  })
  oldResult: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15, {
    message: 'result should be max 15 characters. ',
  })
  updatedResult: string;
}
