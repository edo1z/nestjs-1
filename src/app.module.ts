import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HogeController } from './hoge/hoge.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HogeController],
  providers: [AppService],
})
export class AppModule {}
