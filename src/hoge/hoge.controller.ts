import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('hoge')
export class HogeController {
  @Get()
  getHoge(): string {
    return 'HOGE!';
  }

  @Get('hage')
  getHage(@Req() req: Request): string {
    console.log(req.query, req.params);
    return 'HAGE!';
  }
}
