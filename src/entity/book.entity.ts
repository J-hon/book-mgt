import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';

@Entity({ name: 'books' })
export class Book extends Base {
  @Column({ unique: true })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  author_name: string;

  @Column()
  published_at: Date;
}
