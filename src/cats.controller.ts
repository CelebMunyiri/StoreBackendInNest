import { Controller, Get, Res, Post, HttpCode } from '@nestjs/common';

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
  findOne(@Res() response) {
    response.status(202).send('response sent succesfully');
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
