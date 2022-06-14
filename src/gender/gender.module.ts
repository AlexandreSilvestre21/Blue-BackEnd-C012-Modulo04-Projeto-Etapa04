import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GenderController } from './gender.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [GenderService],
  controllers: [GenderController],
})
export class GenderModule {}
