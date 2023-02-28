import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HogeController } from './hoge/hoge.controller';
import { HogeService } from './hoge/hoge.service';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HogeController],
  providers: [AppService, HogeService],
})
export class AppModule {}
