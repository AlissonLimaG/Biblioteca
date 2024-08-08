import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) { }

  async createBook(dados: CreateBookDto, files: { capa?: Express.Multer.File[], livro?: Express.Multer.File[] }) {

    const capaFilename = files.capa ? `http://localhost:3000/${files.capa[0].path}` : null;
    const pdfFilename = files.livro ? `http://localhost:3000/${files.livro[0].path}` : null;
    console.log(capaFilename)

    const newBook = this.bookRepository.create({
      ...dados,
      capa: capaFilename,
      livro: pdfFilename
    });

    await this.bookRepository.save(newBook)

    return { message: 'Livro cadastrado com sucesso!' }
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
