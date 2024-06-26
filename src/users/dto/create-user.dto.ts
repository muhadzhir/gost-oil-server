import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../users.model";
type OilStation = 'ZARECHNY'
export class CreateUserDto {
  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя в системе' })
  readonly name: string

  @ApiProperty({ example: '123456', description: 'Пароль' })
  readonly password: string

  @ApiProperty({ example: 'ADMIN', description: 'Роль'})
  readonly  role: UserRole

  @ApiProperty({ example: 'ZARECHNY', description: 'Заправка'})
  readonly  oilStation: OilStation
}
