import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import {  UseGuards } from "@nestjs/common";
import { RolesGuard } from "../auth/role-auth-guerd";
import { Roles } from "../auth/roles-auth-decorator";
import { OilStation } from "../types";

@WebSocketGateway({ cors: true })
export class WebsocketGateway implements  OnGatewayConnection{
  @WebSocketServer()
  server: Server;

  handleConnection(socket: Socket) {}
  handlePhoneInit(socket: Socket) {}
  @SubscribeMessage('newTicket')
  @Roles('OPERATOR', 'CLIENT', 'ADMIN')
  @UseGuards(RolesGuard)
  handleAddTicket(client: Socket, { phone, oilStation }: { phone: string, oilStation: OilStation}) {
    this.server.sockets.emit('newTicketClient', { phone, oilStation })
  }

  @SubscribeMessage('addParticipant')
  @Roles('OPERATOR', 'ADMIN')
  @UseGuards(RolesGuard)
  handleTicked(client: Socket, { numbers, oilStation }: { numbers: number[], oilStation: OilStation}) {
    this.server.sockets.emit('addParticipant', { numbers, oilStation })
  }

  @SubscribeMessage('addParticipantReject')
  @Roles('OPERATOR', 'ADMIN')
  @UseGuards(RolesGuard)
  handleTickedReject(client: Socket, { oilStation }: { oilStation: OilStation}) {
    this.server.sockets.emit('addParticipantReject', {  oilStation })
  }
  handleDisconnect(socket: Socket) {}
}
