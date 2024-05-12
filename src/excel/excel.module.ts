import { Module } from '@nestjs/common';
import { ExcelController } from './excel.controller';
import { ExcelService } from './excel.service';
import { NumbersModule } from "../numbers/numbers.module";

@Module({
  controllers: [ExcelController],
  providers: [ExcelService],
  imports: [
    NumbersModule
  ]

})
export class ExcelModule {}
