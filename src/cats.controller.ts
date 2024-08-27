import { Controller, Get, Body, Post, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
//import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './Dto/createCatDto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto, @Res() response) {
    this.catsService.create(createCatDto);
    response.status(200).send({ message: 'Cat added as success' });
  }

  //   @Get()
  //   async findAll(): Promise<Cat[]> {
  //     return this.catsService.findAll();
  //   }

  @Get()
  async findAll(@Res() res: Response) {
    res.status(200).send(this.catsService.findAll());
  }
}

@Controller('cats/one')
export class OneCatController {
  @Get()
  async findOne(): Cat {
    return this.catsService.findOne();
  }
}
