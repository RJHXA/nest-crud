import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma.service';
import { CreateBookDto } from '../dto/create-book.dto';

@Injectable()
export class BookRepository {
    constructor(private prisma: PrismaService) {}

    create(book: CreateBookDto) {
        return this.prisma.book.create({
            data: {
                title: book.title,
                author: book.author,
                publishedAt: book.publishedAt
            },
        });
    }

    // findAll() {
    //     return `This action returns all books`;
    // }

    // findOne(id: number) {
    //     return `This action returns a #id book`;
    // }

    // update(id: number, updateBookDto: UpdateBookDto) {
    //     return `This action updates a #id book`;
    // }

    // remove(id: number) {
    //     return `This action removes a #id book`;
    // }
}