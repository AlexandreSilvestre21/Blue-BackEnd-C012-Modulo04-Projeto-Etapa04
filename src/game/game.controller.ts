import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { GameService } from './game.service';
  import { CreateGameDto } from './dto/create-game.dto';
  import { UpdateGameDto } from './dto/update-game.dto';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  import { Game } from './entities/game-entity';

  @ApiTags('game')
  @Controller('game')
  export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Post()
    @ApiOperation({
      summary: 'Incluir um novo jogo.',
    })
    create(@Body() dto: CreateGameDto) {
      return this.gameService.create(dto);
    }

    @Get()
    @ApiOperation({
      summary: 'Exibir todos os jogos.',
    })
    findAll(): Promise<Game[]> {
      return this.gameService.findAll();
    }

    @Get(':id')
    @ApiOperation({
      summary: 'Visualizar jogo pelo ID.',
    })
    findOne(@Param('id') id: string){
      return this.gameService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
      summary: 'Editar jogo pelo  ID.',
    })
    update(@Param('id') id: string, @Body() dto: UpdateGameDto) {
      return this.gameService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({
      summary: 'Deletar jogo pelo ID.',
    })
    delete(@Param('id') id: string) {
      return this.gameService.delete(id);
    }
  }
