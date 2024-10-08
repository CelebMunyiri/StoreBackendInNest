import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { OneCatController } from './cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, OneCatController],
  providers: [AppService, CatsService],
})
export class AppModule {}
