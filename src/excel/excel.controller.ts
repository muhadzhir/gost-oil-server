import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExcelService } from './excel.service';

@Controller('download')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Get('/all-data')
  async downloadAllNumbers(@Res() res: Response): Promise<void> {
    await this.excelService.downloadAllNumbers();
    res.download('src/files/data.xlsx', 'data.xlsx');
  }
}