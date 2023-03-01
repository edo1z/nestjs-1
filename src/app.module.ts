import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HogeModule } from './hoge/hoge.module';
import { logger } from './middleware/logger.middleware';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HogeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('hoge');
  }
}
