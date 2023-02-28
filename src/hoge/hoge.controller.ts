import { Controller, Get } from '@nestjs/common';

@Controller('hoge')
export class HogeController {
  @Get()
  getHoge(): string {
    return 'HOGE!';
  }

  @Get('hage')
  getHage(): string {
    return 'HAGE!';
  }
}
