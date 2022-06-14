import {
  Body, Controller,
  Get, Param, Post, UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { CreateProfileGameDto } from './dto/create-profile-game';
import { ProfileGameService } from './profile-games.service';

@ApiTags('profile-games')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller()
export class ProfileGameController {
  constructor(private readonly profileGameService: ProfileGameService) {}

  @Post('/profile/games')
  @ApiOperation({
    summary: 'Incluir Game em um Perfil (adicioneGame).',
  })
  create( @Body() dto: CreateProfileGameDto) {
    return this.profileGameService.addGame( dto);
  }

  @Get('homepage/:profileId')
  @ApiOperation({
    summary: 'Listar Games por perfil com genero e games favoritos.',
  })
  findOne(@LoggedUser() user:User , @Param('profileId') id: string) {
    return this.profileGameService.findOneProfile(user.id, id);
  }


}
