import { IsUUID } from 'class-validator';

export class ObjectIdDto {
  @IsUUID()
  id: string;
}
