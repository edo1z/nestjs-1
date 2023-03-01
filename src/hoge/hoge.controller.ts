import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateHogeDto } from './dto/create-hoge.dto';
import { HogeService } from './hoge.service';
import { Hoge } from './interfaces/hoge.interface';

@Controller('hoge')
export class HogeController {
  constructor(private hogeService: HogeService) {}

  @Post()
  async create(@Body() createHogeDto: CreateHogeDto): Promise<void> {
    console.log('body', createHogeDto);
    this.hogeService.create(createHogeDto);
  }

  @Get()
  async getHogeList(): Promise<Hoge[]> {
    return this.hogeService.findAll();
  }

  @Get(':id')
  async getHoge(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const msg = `HOGE ${id}!`;
    console.log(msg);
    return msg;
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
