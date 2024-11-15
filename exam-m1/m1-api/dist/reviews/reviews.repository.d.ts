import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { BookEntity } from '../books/entities/books.entity';
export declare class ReviewRepository {
    private readonly repo;
    private readonly bookRepository;
    constructor(repo: Repository<Review>, bookRepository: Repository<BookEntity>);
    findReviewsByBookId(bookId: string): Promise<Review[]>;
    createReview(review: Review): Promise<Review>;
}
