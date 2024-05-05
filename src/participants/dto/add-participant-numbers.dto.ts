import { ApiProperty } from "@nestjs/swagger";
import { OilStation } from "../../types";

export class AddParticipantsNumbersDto {
  @ApiProperty({ example: '7 912 345 67 89', description: 'Телефон' })
  readonly phone: string
  readonly numbersCount: number
  readonly oilStation: OilStation
}
