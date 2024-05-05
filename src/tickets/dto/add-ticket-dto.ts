import { ApiProperty } from "@nestjs/swagger";
import { OilStation } from "../../types";
export class AddTicketsDto {
  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя в системе' })
  readonly phone: string

  @ApiProperty({ example: '123456', description: 'Пароль' })
  readonly numbersCount: number

  @ApiProperty({ example: 'ZARECHNY', description: 'Заправка'})
  readonly  oilStation: OilStation
}
