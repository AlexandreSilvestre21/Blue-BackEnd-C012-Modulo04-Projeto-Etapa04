import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { GenderService } from 'src/gender/gender.service';
import { CreateGenderDto } from 'src/gender/dto/create-gender.dto';
import { UpdateGenderDto } from 'src/gender/dto/update-gender.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('gender')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um game',
  })
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os games',
  })
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um game pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um game pelo ID',
  })
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um game pelo ID',
  })
  delete(@Param('id') id: string) {
    this.genderService.delete(id);
  }
}
