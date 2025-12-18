import { Injectable } from "@nestjs/common";
import type { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export interface JwtPayload {
  username: string
  sub: number
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

  constructor(configService: ConfigService) {
    const secret = configService.get<string>('JWT_SECRET')

    if (!secret) {
      throw new Error("JWT_SECRET não está definido no ambiente. A aplicação não pode iniciar.");
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false, 
      secretOrKey: secret
    });
  }

  async validate(payload: JwtPayload) {
    return { 
        id: payload.sub, 
        username: payload.username 
    };
  }
}