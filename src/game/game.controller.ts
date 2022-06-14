import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserIsAdmin } from 'src/auth/user-is-admin.decorator';
import { CreateGameDto } from 'src/game/dto/create-game.dto';
import { GameService } from 'src/game/game.service';
import { User } from 'src/user/entities/user.entity';
import { UpdateGameDto } from './dto/update-game.dto';

@ApiTags('game')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um game',
  })
  create(@UserIsAdmin() user:User, @Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os games',
  })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar game pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }
  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um game pelo ID',
  })
  update(@UserIsAdmin() user:User, @Param('id') id: string, @Body() updateGenderDto: UpdateGameDto) {
    return this.gameService.update(id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um game pelo ID',
  })
  delete(@UserIsAdmin() user:User, @Param('id') id: string) {
    this.gameService.delete(id);
  }
}
