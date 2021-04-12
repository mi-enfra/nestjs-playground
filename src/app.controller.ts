import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':version')
  getResponse(@Param() params): Object {
    return this.appService.getResponse(params.version);
  }
}
