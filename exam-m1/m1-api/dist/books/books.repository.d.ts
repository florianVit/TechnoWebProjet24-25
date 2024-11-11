import { Repository } from 'typeorm';
import { BookEntity } from './entities/books.entity';
import { UUID } from 'crypto';
export declare class BookRepository {
    private readonly repo;
    constructor(repo: Repository<BookEntity>);
    createBook(book: BookEntity): Promise<BookEntity>;
    findAll(): Promise<BookEntity[]>;
    findOneById(id: string): Promise<BookEntity>;
    findByTitle(title: string): Promise<BookEntity[]>;
    deleteBook(id: UUID): Promise<void>;
    deleteAllBooks(): Promise<void>;
}
