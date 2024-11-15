import { ReviewService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    createReview(bookId: string, createReviewDto: CreateReviewDto): Promise<Review>;
}
