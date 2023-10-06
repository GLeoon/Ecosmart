import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client/client.module';
import { CollectModule } from './modules/collect/collect.module';

@Module({
  imports: [ClientModule, CollectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
