import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './app.model';
import { CreateStudentDto } from './dto/create-student.dto';


@Injectable()
export class AppService {

  constructor(
    @InjectModel(Student) private studentRepo : typeof Student
    ){}


  async getAll() {
    const students = await this.studentRepo.findAll()
    return students;
  }

  async create(dto: CreateStudentDto): Promise<Student>{
    const student = await this.studentRepo.create(dto);
    return student;
  }

  async getOne(id: number): Promise<Student>{
    const student = await this.studentRepo.findOne({
      where:{
        id
      }
    })

    return student;
  }

  // async deleteStudent(id: number): Promise<Student>{
  //   const deletedStudent = await this.studentRepo.delete(id);

  //   return deletedStudent;
  // }
}
