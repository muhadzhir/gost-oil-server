import { Injectable } from '@nestjs/common';
import { NumberDto } from "./numbers.model";
import { InjectModel } from "@nestjs/sequelize";
import { NumbersDto } from './dto/numbers.dto'
@Injectable()
export class NumbersService {
  constructor(@InjectModel(NumberDto) private numbersRepository: typeof NumberDto) {

  }
  async addNumbers(dto: NumbersDto) {
    const numbers = this.numbersRepository.create(dto)
    return numbers
  }

  async getNumbersByPhone({ phone }: NumbersDto) {
    const numbers = this.numbersRepository.findAll({ where: { phone }})
    return numbers
  }
  async getAllNumbers() {
    const numbers = this.numbersRepository.findAll()
    return numbers
  }
}
