import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GenericStatus } from './dto/http-status.dto';

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
  async show(): Promise<any> {
    return new GenericStatus({
      description: 'Book retrieved successfully',
      data: await this.appService.find(),
    });
  }

  @Post('/')
  async store(): Promise<any> {
    return new GenericStatus({
      description: 'Book created successfully',
      data: await this.appService.create(),
    });
  }

  @Patch('/:id')
  async update(): Promise<any> {
    return new GenericStatus({
      description: 'Book created successfully',
      data: await this.appService.update(),
    });
  }

  @Delete('/:id')
  async destroy(): Promise<any> {
    return new GenericStatus({
      description: 'Book created successfully',
      data: await this.appService.delete(),
    });
  }
}
