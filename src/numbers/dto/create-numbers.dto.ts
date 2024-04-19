import { ApiProperty } from "@nestjs/swagger";

export class CreateNumbersDto {
  @ApiProperty({ example: '7 912 345 67 89', description: 'Телефон' })
  readonly phone: string
}
