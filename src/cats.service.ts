import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

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

  updateOne(id: number): Cat[]{
    if(id < this.cats.length){
      this.cats[id] = {...this.cats[id], age: this.cats[id].age + 1 };
      return this.cats;
    }
    return this.cats;
  }
}
