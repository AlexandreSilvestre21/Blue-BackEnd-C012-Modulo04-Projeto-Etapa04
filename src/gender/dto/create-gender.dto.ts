import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateGenderDto {
  @IsString()
  @ApiProperty({
    description: 'Inclua novo gênero',
    example: 'Puzzle e Party',
  })
  name: string;
}
