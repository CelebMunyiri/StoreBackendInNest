import { Controller, Get, Req, Post, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats here';
  }
}

@Controller('cats/oneCat')
export class OneCatController {
  @Get()
  findOne(): number {
    return 1;
  }
}

@Controller('cats/addCat')
export class AddCatController {
  @Post()
  @HttpCode(202)
  create(): string {
    return 'this action adds a new cat';
  }
}
