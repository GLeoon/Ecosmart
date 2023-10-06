import { enum_collect_type } from '@prisma/client';

export class CreateCollectDto {
  type: enum_collect_type;
  mass: number;
  volume: number;
  client: any;
  createdAt: Date | string;
  updatedAt: Date | string;
}
