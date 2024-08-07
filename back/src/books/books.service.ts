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
){}

  createBook(dados: CreateBookDto, files:{capa?:Express.Multer.File[], livro?:Express.Multer.File[]}) {  
    
    const capaFilename = files.capa ? `${files.capa[0].destination}/${files.capa[0].filename}` : null;
    const pdfFilename = files.livro ? `${files.livro[0].destination}/${files.livro[0].filename}` : null;

    const newBook = this.bookRepository.create({
      ...dados,
      capa: capaFilename,
      livro: pdfFilename
    });

    console.log(newBook)

    return this.bookRepository.save(newBook)
  }

  findAll() {
    return `This action returns all books`;
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
