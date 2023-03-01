import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HogeModule } from './hoge/hoge.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [HogeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('hoge');
  }
}
