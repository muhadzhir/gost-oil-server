
import { Body, Controller, Post, Get } from "@nestjs/common";
import { NumbersService } from "./numbers.service";
import { CreateNumbersDto } from "./dto/create-numbers.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NumberDto } from "./numbers.model";
import { GetNumbersDto } from "./dto/get-numbers.dto";
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

  @Post('/get-numbers')
  getNumbers(@Body() dto: GetNumbersDto) {
    return this.numberssService.getNumbersByPhone(dto)
  }
}
