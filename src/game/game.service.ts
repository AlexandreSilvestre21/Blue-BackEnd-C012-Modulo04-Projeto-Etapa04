import {
    HttpException,
    Injectable,
    NotFoundException,
    UnprocessableEntityException,
  } from '@nestjs/common';
  import { CreateGameDto } from './dto/create-game.dto';
  import { UpdateGameDto } from './dto/update-game.dto';
  import { PrismaService } from '../prisma/prisma.service';
  import { Game } from './entities/game-entity';
  import { Prisma } from '@prisma/client';

  @Injectable()
  export class GameService {
    constructor(private readonly prisma: PrismaService) {}

    create(dto: CreateGameDto) {
      const data: Prisma.GameCreateInput = { ...dto, genders: {
        createMany: {
          data: dto.genders.map((elementId) => ({ genderId: elementId}))
        }
      } };

      return this.prisma.game.create({ data,
        include: {
          genders:{
            select:{
              gender:{
                select:{
                  name:true
                }
              }
            }
          }
        }
      }).catch(this.handleError);
    }

    async findAll() {
      const list = await this.prisma.game.findMany();

      if (list.length === 0) {
        throw new NotFoundException('Não há jogos cadastrados. Gostaria de incluir o seu favorito?');
      }
      return list;
    }

    async findOne(id: string) {
      const record = await this.prisma.game.findUnique({ where: { id } });

      if (!record) {
        throw new NotFoundException(`Jogo com o Id: '${id}' não está cadastrado! `);
      }

      return record;
    }

    async update(id: string, dto: UpdateGameDto) {
      await this.findOne(id);

      const data: Partial<Game> = { ...dto };

      return this.prisma.game
        .update({
          where: { id },
          data,
        })
        .catch(this.handleError);
    }

    async delete(id: string) {
      await this.findOne(id);

      await this.prisma.game.delete({
        where: { id },
      });
      throw new HttpException('', 204);
    }

    handleError(error: Error): undefined {
      const errorLines = error.message?.split('\n');
      const lastErrorLine = errorLines[errorLines.length - 1].trim();
      if (!lastErrorLine) {
        console.error(error)

      }
      throw new UnprocessableEntityException(
        lastErrorLine || 'Erro no processamento! Favor recarregar a página.',
      );
    }
  }
