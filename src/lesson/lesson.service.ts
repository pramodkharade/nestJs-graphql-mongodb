import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRespository: Repository<Lesson>,
  ) {}
  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRespository.findOne({ where: { id } });
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRespository.find();
  }
  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRespository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });
    return this.lessonRespository.save(lesson);
  }
  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRespository.findOne({
      where: {
        id: lessonId,
      },
    });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRespository.save(lesson);
  }
}
