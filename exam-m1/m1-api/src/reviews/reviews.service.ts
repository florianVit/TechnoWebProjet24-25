import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { BookEntity } from '../books/entities/books.entity';



@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>
  ) {}

  async createReview(bookId: string, createReviewDto: CreateReviewDto): Promise<Review> {
    // Vérifier que le livre existe
    const book = await this.bookRepository.findOne({ where: { id: bookId } });
    if (!book) {
      throw new NotFoundException(`Le livre avec l'ID ${bookId} n'existe pas.`);
    }

    // Créer un nouvel avis
    const review = new Review();
    review.rating = createReviewDto.rating;
    review.comment = createReviewDto.comment;
    review.book = book; // Associe l'avis au livre

    // Sauvegarder l'avis dans la base de données
    return this.reviewRepository.save(review);
  }
}