import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/create-user-dto';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  import { User } from './entities/user.entity';
  import { UpdateUserDto } from './dto/update-user.dto';

  @ApiTags('user')
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @ApiOperation({
      summary: 'Cria novo usuário.',
    })
    create(@Body() dto: CreateUserDto) {
      return this.userService.create(dto);
    }

    @Get()
    @ApiOperation({
      summary: 'Listar usuários.',
    })
    findAll(): Promise<User[]> {
      return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({
      summary: 'Visualizar usuário pelo Id.',
    })
    findOne(@Param('id') id: string) {
      return this.userService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
      summary: 'Editar usuário pelo Id.',
    })
    update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
      return this.userService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({
      summary: 'Deletar usuário pelo Id.',
    })
    delete(@Param('id') id: string) {
      return this.userService.delete(id);
    }
  }
