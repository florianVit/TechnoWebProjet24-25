import { BooksService } from './books.service';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getAllBooks(): any[];
    getBookById(id: string): any;
    createBook(createBookDto: any): {
        title: string;
        publicationDate: Date;
        authorId: string;
        note: string;
        commentaire?: string;
        prix: string;
        description: string;
        id: string;
    };
    deleteBook(id: string): {
        message: string;
    };
    updateBook(id: string, createBookDto: any): any;
}
