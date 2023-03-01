import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HogeModule } from './hoge/hoge.module';
import { AppService } from './app.service';

@Module({
  imports: [HogeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
