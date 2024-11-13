import { BookRepository } from './books.repository';
import { BookEntity } from './entities/books.entity';
import { UUID } from 'crypto';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    createBook(createBookDto: Partial<BookEntity>): Promise<BookEntity>;
    getAllBooks(): Promise<BookEntity[]>;
    getBookById(id: UUID): Promise<BookEntity>;
    removeBook(id: UUID): Promise<void>;
    updateBook(id: UUID, bookData: Partial<BookEntity>): Promise<BookEntity>;
}
