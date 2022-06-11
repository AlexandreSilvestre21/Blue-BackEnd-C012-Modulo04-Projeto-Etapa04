import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Titulo do jogo.',
    example: 'Decathlon',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem (em URL) do jogo',
    example:
      'http://2.bp.blogspot.com/-5k1GLRmO40k/VNyjLqteUhI/AAAAAAAAKPg/FqI4HlcwciA/s1600/05-decathlon-activision-1983-atari-jogo-decada_de_80.jpg',
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Resumo do jogo.',
    example:
      'The Activision Decathlon, popularmente conhecido como Decathlon, é o jogo olímpico do Atari que era medalha de outro em quebrar controles',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Ano de lançamento.',
    example: 1983,
  })
  year: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos gêneros do jogo.',
    example:
      '["4306080b-e8be-46de-a591-192dce96ff10", "c4446e0a-93a8-4af2-8c63-606833e367a7"]',
  })
  genders: string[];

}
