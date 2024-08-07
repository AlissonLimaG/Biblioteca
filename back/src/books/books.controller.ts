import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

const arquivos = diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(file.originalname);
    const filename = `${file.originalname.replace(/\s+/g, '')}-${uniqueSuffix}${ext}`;
    callback(null, filename);
  },
});

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post('cadastro')
  @UseInterceptors(
    FileFieldsInterceptor([,
      { name: 'capa', maxCount: 1 },
      { name: 'livro', maxCount: 1 }
    ], {
      storage: arquivos
    },
    ),
  )

  async create(
    @Body() dados: CreateBookDto,
    @UploadedFiles() files: { capa?: Express.Multer.File[], livro?: Express.Multer.File[] },
  ) {
    console.log(dados)
    console.log(files)

    return this.booksService.createBook(dados,files);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

}
