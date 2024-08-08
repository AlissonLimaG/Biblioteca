import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(dados: CreateBookDto, files: {
        capa?: Express.Multer.File[];
        livro?: Express.Multer.File[];
    }): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("./entities/book.entity").Book[]>;
}
