import { forwardRef, Module } from "@nestjs/common";
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Ticket } from "./tickets-model";
import { AuthModule } from "../auth/auth.module";
import { ParticipantsModule } from "../participants/participants.module";

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
  imports: [
    SequelizeModule.forFeature([Ticket]),
    AuthModule,
    ParticipantsModule
  ],
})
export class TicketsModule {}
