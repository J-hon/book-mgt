import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/book.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  get(): Promise<any> {
    return 'Hello World!';
  }

  find(id: string): Promise<any> {
    return 'Hello World!';
  }

  create(payload: any): Promise<any> {
    return 'Hello World!';
  }

  update(id: string, payload: any): Promise<any> {
    return 'Hello World!';
  }

  delete(id: string): Promise<any> {
    return 'Hello World!';
  }
}
