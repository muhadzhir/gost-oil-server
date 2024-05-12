import { Module } from '@nestjs/common';
import { NumbersController } from './numbers.controller';
import { NumbersService } from './numbers.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { NumberDto } from 'src/numbers/numbers.model';

@Module({
  controllers: [NumbersController],
  providers: [NumbersService],
  imports: [
    SequelizeModule.forFeature([NumberDto])
  ],
  exports: [
    NumbersService
  ]
})
export class NumbersModule { }