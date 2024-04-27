import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles-auth-decorator";

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private jwtService: JwtService, private reflector: Reflector) {
  }
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if (!requiredRoles) return true
    const request = context.switchToHttp().getRequest()
    try {
      const authHeader = request.headers.authorization
      const brearer = authHeader.split(' ')[0]
      const token = authHeader.split(' ')[1]
      if (brearer !== 'Bearer' || !token) throw new UnauthorizedException(({ message: 'Не авторизован' }))
      const user = this.jwtService.verify(token)
      request.user = user
      return requiredRoles.includes(user.role)
    } catch (e) {
      throw new ForbiddenException(({ message: 'Ошибка Доступа' }))
    }
  }
}