import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './Dto/createCatDto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(i: number): Cat {
    return this.cats[i];
  }

  updateOne(id: number, updatecatDto: UpdateCatDto): Cat {
    const existingCat = this.cats[id];

    if (existingCat) {
      this.cats[id] = { ...existingCat, ...updatecatDto };
      return this.cats[id];
    }

    return null;
  }
}
