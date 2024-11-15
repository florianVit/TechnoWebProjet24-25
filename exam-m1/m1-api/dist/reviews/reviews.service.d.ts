import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { BookEntity } from '../books/entities/books.entity';
export declare class ReviewService {
    private readonly reviewRepository;
    private readonly bookRepository;
    constructor(reviewRepository: Repository<Review>, bookRepository: Repository<BookEntity>);
    createReview(bookId: string, createReviewDto: CreateReviewDto): Promise<Review>;
    getReviewsForBook(bookId: string): Promise<Review[]>;
}
