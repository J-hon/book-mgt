import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { INestApplication } from '@nestjs/common';
import { Book } from '../entity';
import { AppService } from '../app.service';
import { bookStub } from './stubs/book.stub';
import { BookRepositoryMock } from './mocks/book.repository.mock';
import { BookDto } from 'src/dto/book.dto';

describe('BookService', () => {
  let app: INestApplication;
  let service: AppService;
  let module: TestingModule;
  let bookRepo: Repository<Book>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getRepositoryToken(Book),
          useValue: BookRepositoryMock,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    service = module.get<AppService>(AppService);
    bookRepo = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  afterAll(async () => {
    await app.close();
  });

  it('service should be defined', () => {
    expect(bookRepo).toBeDefined();
  });

  describe('retrieve all books', () => {
    let books: Book[];

    beforeEach(async () => {
      books = await service.get();
    });

    it('should call find', () => {
      const spy = jest.spyOn(BookRepositoryMock, 'find');
      expect(spy).toHaveBeenCalled();
    });

    it('should return an array of books', () => {
      expect(books).toEqual([bookStub]);
    });
  });

  describe('create a book', () => {
    let book: Book;
    const payload: BookDto = {
      title: 'Test book title 2',
      description: 'Test book description 2',
      author_name: 'Test book author 2',
      published_at: new Date('2020-10-09'),
    };

    beforeEach(async () => {
      book = await service.create(payload);
    });

    it('should call create and save', () => {
      const createSpy = jest.spyOn(BookRepositoryMock, 'create');
      const saveSpy = jest.spyOn(BookRepositoryMock, 'save');

      expect(createSpy).toHaveBeenCalled();
      expect(saveSpy).toHaveBeenCalled();
    });

    it('should return a book', () => {
      expect(book.id).toBe(bookStub.id);
      expect(book.title).toBe(bookStub.title);
      expect(book.description).toBe(bookStub.description);
      expect(book.author_name).toBe(bookStub.author_name);
    });
  });

  describe('retrieve a single book', () => {
    let book: Book;

    beforeEach(async () => {
      book = await service.findById(bookStub.id);
    });

    it('should call findOne', () => {
      const spy = jest.spyOn(BookRepositoryMock, 'findOneBy');
      expect(spy).toHaveBeenCalled();
    });

    it('should return an array of books', () => {
      expect(book).toEqual(bookStub);
    });
  });

  describe('update a single book', () => {
    let book: Book;
    const payload: BookDto = {
      title: 'Test book title 1',
      description: 'Test book description 1',
      author_name: 'Test book author 1',
      published_at: new Date('2020-10-09'),
    };

    beforeEach(async () => {
      book = await service.update(bookStub.id, payload);
    });

    it('should call findOneBy', () => {
      const spy = jest.spyOn(BookRepositoryMock, 'findOneBy');
      expect(spy).toHaveBeenCalled();
    });

    it('should call update', () => {
      const spy = jest.spyOn(BookRepositoryMock, 'update');
      expect(spy).toHaveBeenCalled();
    });

    it('should return a book', () => {
      expect(book.id).toBe(bookStub.id);
      expect(book.title).toBe(bookStub.title);
      expect(book.description).toBe(bookStub.description);
      expect(book.author_name).toBe(bookStub.author_name);
    });
  });

  describe('delete a book', () => {
    beforeEach(async () => {
      await service.delete(bookStub.id);
    });

    it('should call findOneBy', () => {
      const spy = jest.spyOn(BookRepositoryMock, 'findOneBy');
      expect(spy).toHaveBeenCalled();
    });

    it('should call delete', () => {
      const spy = jest.spyOn(BookRepositoryMock, 'delete');
      expect(spy).toHaveBeenCalled();
    });
  });
});
