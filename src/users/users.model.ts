import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
type UserRole = 'USER' | 'OPERATOR' | 'ADMIN'
interface UserCreationAttrs {
  name: string,
  password: string
  role: UserRole
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя в системе' })
  @Column({type: DataType.STRING, unique: true, allowNull: false })
  name: string

  @ApiProperty({ example: 'USER', description: 'Роль' })
  @Column({type: DataType.STRING, unique: true, allowNull: false })
  role: string

}
