import {
  Body, Controller,
  Get, Param, Post
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProfileGameDto } from './dto/create-profile-game';
import { ProfileGameService } from './profile-games.service';

@ApiTags('profile-games')
@Controller()
export class ProfileGameController {
  constructor(private readonly profileGameService: ProfileGameService) {}

  @Post('/profile/games')
  @ApiOperation({
    summary: 'Incluir Game em um Perfil (adicioneGame).',
  })
  create(@Body() dto: CreateProfileGameDto) {
    return this.profileGameService.addGame(dto);
  }

  @Get('homepage/:profileId')
  @ApiOperation({
    summary: 'Listar Games por perfil com genero e games favoritos.',
  })
  findOne(@Param('profileId') id: string) {
    return this.profileGameService.findOneProfile(id);
  }


}
