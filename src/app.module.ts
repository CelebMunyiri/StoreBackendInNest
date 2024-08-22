import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  CatsController,
  OneCatController,
  AddCatController,
} from './cats.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CatsController,
    OneCatController,
    AddCatController,
  ],
  providers: [AppService],
})
export class AppModule {}
