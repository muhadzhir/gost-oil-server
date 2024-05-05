import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Participant } from "./participants.model";
import { CreateParticipantDto } from "./dto/create-participant.dto";
import { AddParticipantsNumbersDto } from "./dto/add-participant-numbers.dto"
import { NumberDto } from 'src/numbers/numbers.model';
@Injectable()
export class ParticipantsService {
  constructor(@InjectModel(Participant) private participantRepository: typeof Participant,
    @InjectModel(NumberDto) private numbersRepository: typeof NumberDto) { }

  async addNumbers(dto: AddParticipantsNumbersDto) {
    let participant = await this.getParicipiantByPhone(dto.phone)
    if (!participant) {
      await this.createParticipant(dto)
    }
    const createNumbers = []
    for (let i = 0; i < dto.numbersCount; i++) {
      createNumbers.push({ phone: dto.phone, oilStation: dto.oilStation })
    }
    const numbers = await this.numbersRepository.bulkCreate(createNumbers)
    return numbers
  }
  async createParticipant(dto: CreateParticipantDto) {
    const participant = await this.participantRepository.create(dto)
    return participant
  }
  async getParicipiantByPhone(phone: string): Promise<Participant> {
    const participant = await this.participantRepository.findOne({ where: { phone } })
    return participant
  }

  async getAllParticipants() {
    const participants = await this.participantRepository.findAll()
    return participants ?? [];
  }
}
