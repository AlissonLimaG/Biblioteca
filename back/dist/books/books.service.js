"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./entities/book.entity");
const typeorm_2 = require("typeorm");
let BooksService = class BooksService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async createBook(dados, files) {
        const capaFilename = files.capa ? `http://localhost:3000/${files.capa[0].path}` : null;
        const pdfFilename = files.livro ? `http://localhost:3000/${files.livro[0].path}` : null;
        console.log(capaFilename);
        const newBook = this.bookRepository.create({
            ...dados,
            capa: capaFilename,
            livro: pdfFilename
        });
        await this.bookRepository.save(newBook);
        return { message: 'Livro cadastrado com sucesso!' };
    }
    findAll() {
        return this.bookRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} book`;
    }
    update(id, updateBookDto) {
        return `This action updates a #${id} book`;
    }
    remove(id) {
        return `This action removes a #${id} book`;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map