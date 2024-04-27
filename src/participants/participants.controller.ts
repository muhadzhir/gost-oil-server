import { Body, Controller, Post, Get, UseGuards } from "@nestjs/common";
import { ParticipantsService } from "./participants.service";
import { AddParticipantsNumbersDto } from "./dto/add-participant-numbers.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Participant } from "./participants.model";
import { Roles } from "../auth/roles-auth-decorator";
import { RolesGuard } from "../auth/role-auth-guerd";

@Controller('participants')
export class ParticipantsController {
  constructor(private participantsService: ParticipantsService) { }
  @Roles('OPERATOR')
  @UseGuards(RolesGuard)
  @ApiOperation({
    summary: 'Создание участника'
  })
  @ApiResponse({
    status: 200, type: Participant
  })
  @Post('/add-numbers')
  addNumbers(@Body() dto: AddParticipantsNumbersDto) {
    return this.participantsService.addNumbers(dto)
  }
  @Get('/all')
  getAll() {
    return this.participantsService.getAllParticipants()
  }
}
