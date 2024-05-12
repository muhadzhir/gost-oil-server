import {  Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { OilStation } from "../types";
import { AutoIncrement } from "sequelize-typescript/dist/model/column/primary-key/auto-increment";
interface NumberCreationAttrs {
  phone: string
}
@Table({ tableName: 'numbers' })
export class NumberDto extends Model<NumberDto, NumberCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '7 912 345 67 89', description: 'Телефон' })
  @Column({ type: DataType.STRING, allowNull: false })
  phone: string

  @ApiProperty({ example: 'ZARECHNY', description: 'Заправка' })
  @Column({ type: DataType.STRING, allowNull: false })
  oilStation: OilStation
}
