import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
export type UserRole = 'CLIENT' | 'OPERATOR' | 'ADMIN'
interface UserCreationAttrs {
  name: string,
  password: string
  role: UserRole
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя в системе' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string

  @ApiProperty({ example: '123123', description: 'Пароль' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({ example: 'USER', description: 'Роль' })
  @Column({ type: DataType.STRING,  allowNull: false })
  role: string

  @ApiProperty({ example: 'ZARECHNY', description: 'Заправка' })
  @Column({ type: DataType.STRING,  allowNull: false })
  oilStation: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}
