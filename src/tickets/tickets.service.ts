import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GetTicketsDto } from "./dto/get-tickets.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./tickets-model";
import { AddTicketsDto } from "./dto/add-ticket-dto";
import { Participant } from "../participants/participants.model";
import { ParticipantsService } from "../participants/participants.service";
import { OilStation } from "../types";

@Injectable()
export class TicketsService {
  constructor(@InjectModel(Ticket) private ticketRepository: typeof Ticket,
      private  participantsService: ParticipantsService

  ) {}
  async addTicket(dto: AddTicketsDto) {
    const numbers = await  this.participantsService.addNumbers(dto)
    if (!numbers) throw new HttpException('Что то пошло не так', HttpStatus.BAD_REQUEST)
    const ticket = await this.ticketRepository.create(dto)
    return { ticket, numbers: numbers.map(number => number.id) }
  }
  async getTicketsByOilStation(oilStation: OilStation ) {
    const tickets = await this.ticketRepository.findAll({ where: { oilStation }, include: {all: true }})
    return tickets?? [];
  }
}
