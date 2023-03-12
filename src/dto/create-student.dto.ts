import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto{

    @ApiProperty({example:'Nurdaulet', description:'Name of student'})
    readonly name: string;

    @ApiProperty({example:'Surname', description:'Surname of student'})
    readonly surname: string;

    @ApiProperty({example:'IT2-2006', description:'Group of student'})
    readonly group: string;

    @ApiProperty({example:'2020', description:'Addmited year of student'})
    readonly addmitedYear: number;
}