import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/book.entity';
import { BookDto } from './dto/book.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async get(): Promise<Book[]> {
    return await this.bookRepository.find({});
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) throw new NotFoundException('Book not found');

    return book;
  }

  async create(payload: BookDto): Promise<Book> {
    const book = this.bookRepository.create(payload);
    return await this.bookRepository.save(book);
  }

  async update(id: string, payload: any): Promise<Book> {
    const book = await this.findById(id);
    await this.bookRepository.update(book.id, payload);

    return await this.findById(id);
  }

  async delete(id: string): Promise<void> {
    const book = await this.findById(id);
    await this.bookRepository.delete(book.id);
  }
}
