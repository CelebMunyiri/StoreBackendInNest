import { Injectable, NotFoundException } from '@nestjs/common';
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

  updateOne(id: number): Cat[] {
    // Check if the id is valid (within array bounds)
    if (id < 0 || id >= this.cats.length) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }

    // Safely update the cat's age
    this.cats[id] = { ...this.cats[id], age: this.cats[id].age + 1 };
    return this.cats;
  }
}
