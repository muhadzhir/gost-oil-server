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
    let participant = await this.getParicipiantByPhone(dto.phone) || await this.createParticipant(dto)
    const numbers = this.addNumbersByPhone(participant.phone, dto.sum)
    return numbers
  }
  async addNumbersByPhone(phone: string, sum: number) {
    const numbersCount = Math.ceil(sum / 1000)
    const createNumbers = []
    for (let i = 0; i < numbersCount; i++) {
      createNumbers.push({ phone })
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
