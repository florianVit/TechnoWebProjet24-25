import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';

@Controller('books')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post(':bookId/reviews') // La route est dynamique
  async createReview(
    @Param('bookId') bookId: string, // Capture l'UUID du livre
    @Body() createReviewDto: CreateReviewDto
  ) {
    return this.reviewService.createReview(bookId, createReviewDto); // Transmet l'UUID et les données de l'avis
  }
}

