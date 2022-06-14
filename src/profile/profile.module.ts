import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from 'src/profile/profile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
