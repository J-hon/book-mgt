import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GenericStatus } from './dto/http-status.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async index(): Promise<any> {
    return new GenericStatus({
      description: 'Books retrieved successfully',
      data: await this.appService.get(),
    });
  }
}
