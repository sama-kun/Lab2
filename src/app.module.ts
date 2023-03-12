import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Student } from './app.model';
import { AppService } from './app.service';

@Module({
  imports: [Student],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
