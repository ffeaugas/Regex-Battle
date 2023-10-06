import { IsNotEmpty, IsString } from "class-validator";

export class UpdateLevelDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  updatedField: string;

  formField: string;
}

//TODOS
//FormField as to be an enum once Postgres is setup because it can only be title, type, statement etc
//The string size requirement as to depend on the formField
