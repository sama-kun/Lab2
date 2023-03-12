import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Student } from './app.model';
import { AppService } from './app.service';
import { CreateStudentDto } from './dto/create-student.dto';

@ApiTags('APIs of users«students')
@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary:'List of students'})
  @ApiResponse({status:200,type:[Student]})
  @Get('/students')
  find() {
    return this.appService.getAll();
  }
  
  @ApiOperation({summary:'Get student by id'})
  @ApiResponse({status:200,type:Student})
  @Post('/students')
  create(@Body() studentDto: CreateStudentDto){
    return this.appService.create(studentDto);
  }

  @ApiOperation({summary:'Create student'})
  @ApiResponse({status:200,type:Student})
  @Get('/students/:id')
  findOne(@Param('id') id: number) {
    return this.appService.getOne(id);
  }
}
