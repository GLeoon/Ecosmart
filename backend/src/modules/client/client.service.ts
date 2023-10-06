import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    return await this.prisma.client.create({ data: createClientDto });
  }

  async findAll() {
    return await this.prisma.client.findMany();
  }

  async findOne(id: number) {
    return this.prisma.client.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    await this.prisma.client.findFirstOrThrow({ where: { id } });
    return await this.prisma.client.update({
      where: {
        id,
      },
      data: updateClientDto,
    });
  }

  async remove(id: number) {
    await this.prisma.client.findFirstOrThrow({ where: { id } });
    await this.prisma.client.delete({
      where: {
        id,
      },
    });
  }
}
