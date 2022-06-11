import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ProfileService } from './profile.service';
  import { CreateProfileDto } from './dto/create-profile';
  import { UpdateProfileDto } from './dto/update-profile';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  import { Profile } from './entities/profile.entity';

  @ApiTags('profile')
  @Controller('profile')
  export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post()
    @ApiOperation({
      summary: 'Criar novo perfil.',
    })
    create(@Body() dto: CreateProfileDto) {
      return this.profileService.create(dto);
    }

    @Get()
    @ApiOperation({
      summary: 'Listar os perfis existentes.',
    })
    findAll(): Promise<Profile[]> {
      return this.profileService.findAll();
    }

    @Get(':id')
    @ApiOperation({
      summary: 'Visualizar perfil pelo Id.',
    })
    findOne(@Param('id') id: string) {
      return this.profileService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
      summary: 'Editar perfil pelo Id.',
    })
    update(
      @Param('id') id: string,
      @Body() dto: UpdateProfileDto,
    ){
      return this.profileService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({
      summary: 'Deletar perfil pelo Id.',
    })
    delete(@Param('id') id: string) {
      return this.profileService.delete(id);
    }
  }
