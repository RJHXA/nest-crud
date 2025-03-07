import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma.service';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async create({ name, email, password }: {name: string; email: string; password: string}) {
        return this.prisma.user.create({
          data: {name, email, password}
        });
    }

    async findByEmail({email}: {email: string}) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }

    async findAll() {
        return this.prisma.user.findMany();
    }
}