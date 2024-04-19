import { ApiProperty } from "@nestjs/swagger";

export class CreateParticipantDto {
  @ApiProperty({ example: '7 912 345 67 89', description: 'Телефон' })
  readonly phone: string
}
