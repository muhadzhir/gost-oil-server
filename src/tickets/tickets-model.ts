import {  Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { OilStation } from "../types";

interface CreationAttrs {
  phone: string,
  sum: number
  oilStation: OilStation
}
@Table({ tableName: 'tickets' })
export class Ticket extends Model<Ticket, CreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '8 (928) 000-00-00', description: 'Телефон' })
  @Column({ type: DataType.STRING, allowNull: false })
  phone: string

  @ApiProperty({ example: '1000', description: 'Сумма' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  sum: number

  @ApiProperty({ example: 'ZARECHNY', description: 'Заправка' })
  @Column({ type: DataType.STRING,  allowNull: false })
  oilStation: OilStation
}
