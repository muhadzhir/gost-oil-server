import { ApiProperty } from "@nestjs/swagger";

export class AddParticipantsNumbersDto {
  @ApiProperty({ example: '7 912 345 67 89', description: 'Телефон' })
  readonly phone: string
  readonly summ: number
}
