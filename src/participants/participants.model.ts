import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { NumberDto } from "src/numbers/numbers.model";
interface ParticipantCreationAttrs {
  phone: string
}
@Table({ tableName: 'participants' })
export class Participant extends Model<Participant, ParticipantCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '7 912 345 67 89', description: 'Телефон' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  phone: string

  @ApiProperty({ example: '123', description: 'Номер' })
  @BelongsToMany(() => Participant, () => NumberDto)
  @Column({ type: DataType.ARRAY, unique: true, allowNull: false })
  numbers: NumberDto[]

}
