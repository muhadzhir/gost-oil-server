import { Body, Controller, Post, Get, UseGuards, Param } from "@nestjs/common";
import { TicketsService } from "./tickets.service";
import { AddTicketsDto } from "./dto/add-ticket-dto";
import { GetTicketsDto } from "./dto/get-tickets.dto";
import { RolesGuard } from "../auth/role-auth-guerd";
import { Roles} from "../auth/roles-auth-decorator";
import { OilStation } from "../types";

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {
  }

  @Post('/add-ticket')
  @Roles('OPERATOR')
  @UseGuards(RolesGuard)
  addTicket(@Body() dto: AddTicketsDto) {
    return this.ticketsService.addTicket(dto)
  }
  @Get('/get-tickets/:oilStation')
  @Roles('OPERATOR', 'ADMIN')
  @UseGuards(RolesGuard)
  getTicketsByOilStation(@Param('oilStation') oilStation: OilStation) {
    return this.ticketsService.getTicketsByOilStation(oilStation)
  }
}
