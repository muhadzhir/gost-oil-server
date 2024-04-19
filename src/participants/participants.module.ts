import { Module } from '@nestjs/common';
import { ParticipantsController } from './participants.controller';
import { ParticipantsService } from './participants.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Participant } from "./participants.model";
import { NumbersController } from 'src/numbers/numbers.controller';
import { NumbersService } from 'src/numbers/numbers.service';
import { NumberDto } from 'src/numbers/numbers.model';

@Module({
  controllers: [ParticipantsController, NumbersController],
  providers: [ParticipantsService, NumbersService],
  imports: [
    SequelizeModule.forFeature([Participant]),
    SequelizeModule.forFeature([NumberDto])
  ],
})

export class ParticipantsModule { }
