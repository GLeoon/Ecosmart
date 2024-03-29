import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ClientController],
  providers: [PrismaService, ClientService],
})
export class ClientModule {}
