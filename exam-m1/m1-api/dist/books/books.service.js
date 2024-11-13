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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const books_repository_1 = require("./books.repository");
const books_entity_1 = require("./entities/books.entity");
let BooksService = class BooksService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async createBook(createBookDto) {
        const book = new books_entity_1.BookEntity();
        book.title = createBookDto.title;
        book.authorId = createBookDto.authorId;
        book.note = createBookDto.note || null;
        book.commentaire = createBookDto.commentaire || null;
        book.prix = createBookDto.prix || null;
        book.description = createBookDto.description || null;
        book.publicationDate = createBookDto.publicationDate;
        return this.bookRepository.createBook(book);
    }
    async getAllBooks() {
        return this.bookRepository.findAll();
    }
    async getBookById(id) {
        return this.bookRepository.findOneById(id);
    }
    async removeBook(id) {
        await this.bookRepository.deleteBook(id);
    }
    async updateBook(id, bookData) {
        const book = new books_entity_1.BookEntity();
        Object.assign(book, bookData);
        book.id = id;
        return this.bookRepository.createBook(book);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [books_repository_1.BookRepository])
], BooksService);
//# sourceMappingURL=books.service.js.map