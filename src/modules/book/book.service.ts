import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BookService {

  constructor(private bookRepository: BookRepository) {}

  async create(book: CreateBookDto) {
    return this.bookRepository.create({ title: book.title, author: book.author, publishedAt: book.publishedAt })
  }

  // findAll() {
  //   return `This action returns all books`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #id book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #id book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #id book`;
  // }
}
