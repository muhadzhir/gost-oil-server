import { ApiProperty } from "@nestjs/swagger";

export class GetNumbersDto {
  @ApiProperty({ example: '7 912 345 67 89', description: 'Телефон' })
  readonly phone: string
}
