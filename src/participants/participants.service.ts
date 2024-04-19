import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Participant } from "./participants.model";
import { CreateParticipantDto } from "./dto/create-participant.dto";
import { AddParticipantsNumbersDto } from "./dto/add-participant-numbers.dto"
import { NumberDto } from 'src/numbers/numbers.model';
@Injectable()
export class ParticipantsService {
  constructor(@InjectModel(InjectModel) private participantRepository: typeof Participant,
    @InjectModel(InjectModel) private numbersRepository: typeof NumberDto) { }

  async addNumbers(dto: AddParticipantsNumbersDto) {
    let participant = await this.getParicipiantByPhone(dto.phone) || await this.createParticipant(dto)
    const numbers = this.addNumbersByPhone(participant.phone, dto.summ)
    return numbers
  }
  async addNumbersByPhone(phone: string, summ: number) {
    const participant = await this.numbersRepository.findOne({ where: { phone } })
    const numbersCount = Math.ceil(summ / 1000)
    const numbers = []
    for (let i = 0; i < numbersCount; i++) {
      const number = await this.numbersRepository.create(participant.phone)
      numbers.push(number)
    }
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
