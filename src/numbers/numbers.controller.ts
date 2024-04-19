
import { Body, Controller, Post } from "@nestjs/common";
import { NumbersService } from "./numbers.service";
import { CreateNumbersDto } from "./dto/create-numbers.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NumberDto } from "./numbers.model";
@Controller('numbers')
export class NumbersController {
  constructor(private numberssService: NumbersService) { }
  @ApiOperation({
    summary: 'Создание номера'
  })
  @ApiResponse({
    status: 200, type: NumberDto
  })
  @Post()
  create(@Body() dto: CreateNumbersDto) {
    return this.numberssService.addNumbersByPhone(dto)
  }
}
