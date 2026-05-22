import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      message:
        'Kitchen Trust Backend Running',
    };
  }
}