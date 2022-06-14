import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GenderController } from './gender.controller';

@Module({
  imports: [PrismaModule],
  providers: [GenderService],
  controllers: [GenderController],
})
export class GenderModule {}
