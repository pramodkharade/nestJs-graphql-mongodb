import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '24243234',
      name: 'C Program',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
