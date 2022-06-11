import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { GenderService } from './gender.service';
  import { CreateGenderDto } from './dto/create-gender.dto';
  import { UpdateGenderDto } from './dto/update-gender.dto';
  import { ApiOperation, ApiTags } from '@nestjs/swagger';
  import { Gender } from './entities/gender.entity';

  @ApiTags('gender')
  @Controller('gender')
  export class GenderController {
    constructor(private readonly genderService: GenderService) {}

    @Get()
    @ApiOperation({
      summary: 'Listar os tipos de gêneros.',
    })
    findAll(): Promise<Gender[]> {
      return this.genderService.findAll();
    }

    @Post()
    @ApiOperation({
      summary: 'Criar gênero novo .',
    })
    create(@Body() dto: CreateGenderDto): Promise<Gender> {
      return this.genderService.create(dto);
    }

    @Patch(':id')
    @ApiOperation({
      summary: 'Editar o gênero pelo Id.',
    })
    update(
      @Param('id') id: string,
      @Body() dto: UpdateGenderDto,
    ): Promise<Gender> {
      return this.genderService.update(id, dto);
    }

    @Get(':id')
    @ApiOperation({
      summary: 'Visualizar o gênero pelo Id.',
    })
    findOne(@Param('id') id: string): Promise<Gender> {
      return this.genderService.findOne(id);
    }


    @Delete(':id')
    @ApiOperation({
      summary: 'Deletar o gênero pelo Io.',
    })
    delete(@Param('id') id: string) {
      return this.genderService.delete(id);
    }
  }
