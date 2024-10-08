import { Controller, Get, Body, Post, Res, Put, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

import { CreateCatDto, UpdateCatDto } from './Dto/createCatDto';
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
  constructor(private catsService: CatsService) {}
  @Get()
  async findOne(i: number) {
    return this.catsService.findOne(i);
  }

  @Put(':id')
  updateOneCat(@Param('id') id: number, @Body() updatecatDto: UpdateCatDto) {
    return this.catsService.updateOne(id, updatecatDto);
  }
}
