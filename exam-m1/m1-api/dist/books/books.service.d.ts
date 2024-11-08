import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private books;
    findAll(): any[];
    findOne(id: string): any;
    create(createBookDto: CreateBookDto): {
        title: string;
        publicationDate: Date;
        authorId: string;
        id: string;
    };
    remove(id: string): {
        message: string;
    };
}
