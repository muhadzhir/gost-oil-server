import { ApiProperty } from "@nestjs/swagger";
import { OilStation } from "../../types";
export class GetTicketsDto {
  @ApiProperty({ example: 'ZARECHNY', description: 'Заправка'})
  readonly  oilStation: OilStation
}
