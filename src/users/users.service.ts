import { Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) { }
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    return user
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({include: {all: true }})
    return users ?? [];
  }

  async getUserByName(name: string) {
    const user = await this.userRepository.findOne({where: { name }, include: { all: true}})
    return user
  }
}
