import { Body, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import { User } from "../users/users.model";
@Injectable()
export class AuthService {

  constructor(private  userService: UsersService,
              private  jwtService: JwtService) {
  }
  async login( userDto: CreateUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByName(userDto.name)
    if (candidate) {
      throw new HttpException('Пользователь уже есть', HttpStatus.BAD_REQUEST)
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5)
    const user = await this.userService.createUser({ ...userDto, password: hashPassword})
    return this.generateToken(user)
  }

  private async  generateToken (user: User) {
    const payload = { name: user.name, id: user.id, role: user.role, oilStation: user.oilStation}
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async  validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByName(userDto.name)
    if (!user) {
      throw new  UnauthorizedException({message: 'Пользователь не найден'})

    }
    const passwordEquals = await bcrypt.compare(userDto.password, user?.password)
    if (passwordEquals) {
      return user
    }
    throw new  UnauthorizedException({message: 'Логин и пароль не совпадают'})
  }
}
