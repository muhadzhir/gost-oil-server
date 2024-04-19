import { Body, Controller, Post, Get, } from "@nestjs/common";
import { ParticipantsService } from "./participants.service";
import { AddParticipantsNumbersDto } from "./dto/add-participant-numbers.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Participant } from "./participants.model";

@Controller('participants')
export class ParticipantsController {
  constructor(private participantsService: ParticipantsService) { }
  @ApiOperation({
    summary: 'Создание участника'
  })
  @ApiResponse({
    status: 200, type: Participant
  })
  @Post()
  addNumbers(@Body() dto: AddParticipantsNumbersDto) {
    return this.participantsService.addNumbers(dto)
  }
  @Get()
  getAll() {
    return this.participantsService.getAllParticipants()
  }
}
