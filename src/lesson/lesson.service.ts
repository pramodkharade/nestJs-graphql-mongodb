import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRespository: Repository<Lesson>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRespository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRespository.save(lesson);
  }
}
