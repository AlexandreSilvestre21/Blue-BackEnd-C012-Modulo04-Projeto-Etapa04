import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class FavUpdate {
  @IsBoolean()
  @ApiProperty({
    description: 'Favoritar game pelo perfil',
    example: true,
  })
  favorite?: boolean;
}



