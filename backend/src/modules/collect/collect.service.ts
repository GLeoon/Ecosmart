import { Injectable } from '@nestjs/common';
import { CreateCollectDto } from './dto/create-collect.dto';
import { UpdateCollectDto } from './dto/update-collect.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CollectService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCollectDto) {
    return await this.prisma.collect.create({
      data: {
        type: data.type,
        mass: data.mass,
        volume: data.volume,
        client: {
          connect: {
            id: data.client, // Conecte a coleção ao cliente usando o ID do cliente criado
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.collect.findMany();
  }

  async findOne(id: number) {
    return this.prisma.collect.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCollectDto: UpdateCollectDto) {
    await this.prisma.collect.findFirstOrThrow({ where: { id } });
    return await this.prisma.collect.update({
      where: {
        id,
      },
      data: updateCollectDto,
    });
  }

  async remove(id: number) {
    await this.prisma.collect.findFirstOrThrow({ where: { id } });
    await this.prisma.collect.delete({
      where: {
        id,
      },
    });
  }
}
