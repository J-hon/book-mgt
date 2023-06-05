import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GenericStatus } from './dto/http-status.dto';
import { BookDto } from './dto/book.dto';
import { ObjectIdDto } from './dto/uuid.dto';

@Controller('v1/books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async index(): Promise<any> {
    return new GenericStatus({
      description: 'Books retrieved successfully',
      data: await this.appService.get(),
    });
  }

  @Get('/:id')
  async show(@Param() { id }: ObjectIdDto): Promise<any> {
    return new GenericStatus({
      description: 'Book retrieved successfully',
      data: await this.appService.findById(id),
    });
  }

  @Post('/')
  async store(@Body() req: BookDto): Promise<any> {
    return new GenericStatus({
      description: 'Book created successfully',
      data: await this.appService.create(req),
    });
  }

  @Patch('/:id')
  async update(
    @Param() { id }: ObjectIdDto,
    @Body() req: BookDto,
  ): Promise<any> {
    return new GenericStatus({
      description: 'Book updated successfully',
      data: await this.appService.update(id, req),
    });
  }

  @Delete('/:id')
  async destroy(@Param() { id }: ObjectIdDto): Promise<any> {
    return new GenericStatus({
      description: 'Book deleted successfully',
      data: await this.appService.delete(id),
    });
  }
}
