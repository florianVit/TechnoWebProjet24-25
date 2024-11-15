import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-books.dto';
import { BookEntity } from './entities/books.entity';
import { UUID } from 'crypto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAllBooks(): Promise<BookEntity[]>;
    getBookById(id: UUID): Promise<BookEntity>;
    createBook(createBookDto: CreateBookDto): Promise<{
        id: string;
    }>;
    deleteBook(id: UUID): Promise<{
        message: string;
    }>;
    updateBook(id: UUID, createBookDto: CreateBookDto): Promise<BookEntity>;
}
