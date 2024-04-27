import { Controller, Get, UseGuards } from "@nestjs/common";
import { Roles } from "./auth/roles-auth-decorator";
import { RolesGuard } from "./auth/role-auth-guerd";

@Controller('/api')
export class AppController {
  constructor() {
  }
  @Get('/users')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getUsers() {
  }
}
