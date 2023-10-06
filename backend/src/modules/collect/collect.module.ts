import { Module } from '@nestjs/common';
import { CollectService } from './collect.service';
import { CollectController } from './collect.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CollectController],
  providers: [PrismaService, CollectService],
})
export class CollectModule {}
