import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateColorDto {
      @ApiProperty()
      @IsString()
      @IsNotEmpty()
      name: string;
}
