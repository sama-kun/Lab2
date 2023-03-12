import { Column, DataType, Model, Table } from "sequelize-typescript";


interface StudentCreationAttrs{
    id: number,
    name: string,
    surname: string,
    group: string,
    addmitedYear: number
};


@Table({ tableName: "students" })
export class Student extends Model<Student,StudentCreationAttrs>{
    @Column({
        type: DataType.NUMBER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number;

      @Column({
        type: DataType.STRING,
        allowNull: false
      })
      name: string;

      @Column({
        type: DataType.STRING,
        allowNull: false
      })
      surname: string;

      @Column({
        type: DataType.STRING,
        allowNull: false
      })
      group: string;

      @Column({
        type: DataType.INTEGER,
        allowNull: false
      })
      addmitedYear: number;

}