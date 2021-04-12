import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':version')
  getResponse(@Param() params, @Query() query): Object {
    return this.appService.getResponse(params.version, query);
  }
}
