import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from '../user/repository/user.repository';
import { PrismaService } from '../../shared/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'segredo',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, UserRepository, PrismaService],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
