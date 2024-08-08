import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    createBook(dados: CreateBookDto, files: {
        capa?: Express.Multer.File[];
        livro?: Express.Multer.File[];
    }): Promise<{
        message: string;
    }>;
    findAll(): Promise<Book[]>;
    findOne(id: number): string;
    update(id: number, updateBookDto: UpdateBookDto): string;
    remove(id: number): string;
}
