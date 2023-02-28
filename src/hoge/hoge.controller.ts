import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('hoge')
export class HogeController {
  @Post()
  create(): string {
    return 'created hoge!';
  }

  @Get()
  getHogeList(): string {
    return 'HOGE List!';
  }

  @Get(':id')
  getHoge(@Param('id') _id: string): string {
    const id: number = parseInt(_id);
    if (isNaN(id)) {
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    } else {
      const msg = `HOGE ${id}!`;
      console.log(msg);
      return msg;
    }
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
