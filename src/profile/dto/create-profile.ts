import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsUUID, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(3, 12)
  @ApiProperty({
    description: 'Nome de perfil, precisa conter entre 3 a 12 letras',
    example: 'GTA Master',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Foto do perfil. Formato: URL.',
    example:
      'https://www.gtainside.com/downloads/picr/2016-06/1467152750_gta_sa%202013-04-18%2022-41-07-92.jpg',
  })
  imageUrl: string;


}
