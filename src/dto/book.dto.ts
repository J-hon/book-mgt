import { IsNotEmpty, IsString } from 'class-validator';
import { IsUnique } from './../descorators/unique.decorator';
import { Book } from './../entity';

export class BookDto {
  @IsNotEmpty()
  @IsString()
  @IsUnique(Book, 'title')
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  author_name: string;

  @IsNotEmpty()
  @IsString()
  published_at: Date;
}
