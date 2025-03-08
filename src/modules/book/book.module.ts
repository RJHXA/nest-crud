import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookRepository } from './repository/book.repository';
import { PrismaService } from '../../shared/prisma.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BookController, ],
  providers: [BookService, BookRepository, PrismaService],
  exports: []
})
export class BookModule {}
