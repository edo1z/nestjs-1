import { Injectable } from '@nestjs/common';
import { Hoge } from './interfaces/hoge.interface';

@Injectable()
export class HogeService {
  private readonly hogeList: Hoge[] = [];

  create(hoge: Hoge) {
    this.hogeList.push(hoge);
  }

  findAll(): Hoge[] {
    return this.hogeList;
  }
}
