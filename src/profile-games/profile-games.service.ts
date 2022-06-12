import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from '../utils/not-found';
import { CreateProfileGameDto } from './dto/create-profile-game';

@Injectable()
export class ProfileGameService {
  constructor(private readonly prisma: PrismaService) {}

  async addGame(dto: CreateProfileGameDto) {
    const data: Prisma.GameProfileCreateInput = {
      game: { connect: { id: dto.gameId } },
      profile: { connect: { id: dto.profileId } },
      favorite: dto.favorite,
    };

    return await this.prisma.gameProfile
      .create({
        data,
        select: {
          game: {
            select: {
              id: true,
              title: true,
            },
          },
          profile: {
            select: {
              id: true,
              title: true,
            },
          },
          favorite: true,
        },
      })
      .catch(handleError);
  }

  async findOneProfile(id: string) {
    const allGamesProfile = await this.prisma.profile.findUnique({
      where: {id},
      select: {
          title: true,
          games: {
            select: {
              favorite: true,
              game: {
                include: {
                  genders: {
                    select: {
                      gender: {
                        select: {
                          id: true, name: true


                        }
                      }
                    }
                  }
                }
              },
            }
          },
      }
    });
  const favoriteGames = allGamesProfile.games.filter((game) => game.favorite == true)

  const AllGeners = await this.prisma.gender.findMany({
    select: {
      id: true, name: true,
      games: {
        select: {
          game: {
            select: {
              id: true,
              title: true,
              coverImageUrl: true,
            }
          }
        }
      }
    }
  })

  return [{favoriteGames}, {allGamesProfile}, {AllGeners}] ;
  }
}


