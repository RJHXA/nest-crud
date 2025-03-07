import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserRepository } from '../user/repository/user.repository';


@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) {}

    async login(email:string, password:string) {
        const user = await this.userRepository.findByEmail({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }
    
        const payload = { name: user.name, sub: user.id };

        const access_token = this.jwtService.sign(payload);
    
        return { access_token }
    }
}
