import { Injectable } from '@nestjs/common';
import { NumberDto } from "./numbers.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateNumbersDto } from './dto/create-numbers.dto'
@Injectable()
export class NumbersService {
  constructor(@InjectModel(InjectModel) private numbersRepository: typeof NumberDto) {

  }
  async addNumbersByPhone(dto: CreateNumbersDto) {
    const numbers = this.numbersRepository.create(dto)
    return numbers
  }
}

