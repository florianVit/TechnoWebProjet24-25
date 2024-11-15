import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';

@Controller('books')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post(':bookId/reviews')  // Route pour ajouter un avis
  async createReview(
    @Param('bookId') bookId: string,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    return this.reviewService.createReview(bookId, createReviewDto);
  }

  // Nouvelle route pour récupérer les avis d'un livre
  @Get(':bookId/reviews')
  async getReviewsByBook(@Param('bookId') bookId: string) {
    return this.reviewService.getReviewsForBook(bookId);
  }
}

