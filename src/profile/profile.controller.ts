import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/create-profile';
import { UpdateProfileDto } from './dto/update-profile';
import { Profile } from './entities/profile.entity';
import { ProfileService } from './profile.service';

@ApiTags('user')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('user')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas os usuários',
  })
  findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um usuário',
  })
  findOne(@Param('id') id: string): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um usuário',
  })
  create(@Body() dto: CreateProfileDto): Promise<Profile> {
    return this.profileService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar uma usuário pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto): Promise<Profile> {
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um usuário pelo ID',
  })
  delete(@Param('id') id: string) {
    this.profileService.delete(id);
  }
}


