import { BookEntity } from '../books/entities/books.entity';
export declare class Review {
    id: string;
    book: BookEntity;
    rating: number;
    comment: string;
}
