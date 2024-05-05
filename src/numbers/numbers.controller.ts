
import { Body, Controller, Post, Get } from "@nestjs/common";
import { NumbersService } from "./numbers.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NumberDto } from "./numbers.model";
import { NumbersDto } from "./dto/numbers.dto";
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
  create(@Body() dto: NumbersDto) {
    return this.numberssService.addNumbers(dto)
  }

  @Post('/get-numbers')
  getNumbersByPhone(@Body() dto: NumbersDto) {
    return this.numberssService.getNumbersByPhone(dto)
  }
  @Get('/get-all-numbers')
  getAllNumbers() {
    return this.numberssService.getAllNumbers()
  }
}
