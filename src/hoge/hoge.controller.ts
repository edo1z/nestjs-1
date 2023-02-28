import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('hoge')
export class HogeController {
  @Post()
  create(): string {
    return 'created hoge!';
  }

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
