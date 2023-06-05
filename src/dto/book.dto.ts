import { IsNotEmpty, IsString } from 'class-validator';

export class BookDto {
  @IsNotEmpty()
  @IsString()
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
