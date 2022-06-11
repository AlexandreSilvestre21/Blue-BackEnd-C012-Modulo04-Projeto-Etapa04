import { IsUUID, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileGameDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID game.',
    example: 'i032b125-a322-219h-b62o-27c32a1fb4b3',
  })
  gameId: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID perfil.',
    example: '132267c5-7e22-7622-42e3-73d9a221976c',
  })
  profileId: string;

  @IsBoolean()
  @ApiProperty({
    description: 'É o perfil favorito ?',
    example: true,
  })
  favorite: boolean;
}
