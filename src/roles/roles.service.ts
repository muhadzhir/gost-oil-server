import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepositoy: typeof Role) {

  }
  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepositoy.create(dto)
    return role
  }
  async getRoleByValue(value: string) {
    const role = await this.roleRepositoy.findOne({ where: { value } })
    return role
  }
}
