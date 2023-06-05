import { DeleteResult } from 'typeorm';
import { bookStub } from '../stubs/book.stub';

export const BookRepositoryMock = {
  create: jest.fn((dto) => {
    return dto;
  }),

  find: jest.fn(({}) => {
    return [bookStub];
  }),

  findOneBy: jest.fn(({}) => {
    return bookStub;
  }),

  save: jest.fn((obj) => {
    const result = { ...obj };
    result.id = bookStub.id;

    return result;
  }),

  update: jest.fn((obj) => {
    const result = { ...obj };
    result.id = bookStub.id;

    return result;
  }),

  delete: jest.fn(() => {
    const result = new DeleteResult();
    result.affected = 1;

    return result;
  }),
};
