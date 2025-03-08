import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async register(name: string, email: string, password: string) {
    const existingUser = await this.userRepository.findByEmail({ email });
    if (existingUser) {
      throw new UnauthorizedException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }
}
