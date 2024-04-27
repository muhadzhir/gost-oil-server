import { Body, Controller, Post, Get, Param } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'

@Controller('roles')
export class RolesController {
  constructor(private rolservice: RolesService) {

  }
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolservice.createRole(dto)
  }
  @Get('/:value')
  getByValsue(@Param('value') value: string) {
    return this.rolservice.getRoleByValue(value)
  }
}
