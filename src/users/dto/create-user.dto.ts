import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя в системе' })
  readonly name: string

  @ApiProperty({ example: '123456', description: 'Пароль' })
  readonly password: string
}
