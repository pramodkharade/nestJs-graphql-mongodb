import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true }), LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
