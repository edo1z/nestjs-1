import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('hoge')
export class HogeController {
  @Get()
  getHoge(): string {
    return 'HOGE!';
  }

  @Get('hage')
  getHage(@Query('h') h: string | undefined): string {
    if (h !== undefined) {
      if (h === '') {
        console.log('h is empty string');
      } else {
        console.log(h);
      }
    } else {
      console.log('UNDEFINED');
    }
    return 'HAGE!';
  }
}
