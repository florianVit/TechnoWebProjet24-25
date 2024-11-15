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
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async createReview(bookId: string, createReviewDto: CreateReviewDto): Promise<Review> {
    const { rating, comment } = createReviewDto;

    const book = await this.bookRepository.findOne({ where: { id: bookId } });
    if (!book) {
      throw new NotFoundException('Livre non trouvé');
    }

    const review = this.reviewRepository.create({
      rating,
      comment,
      book,
    });

    return await this.reviewRepository.save(review);
  }

  // Nouvelle méthode pour récupérer les avis d'un livre
  async getReviewsForBook(bookId: string): Promise<Review[]> {
    const book = await this.bookRepository.findOne({ where: { id: bookId }, relations: ['reviews'] });

    if (!book) {
      throw new NotFoundException('Livre non trouvé');
    }

    return book.reviews; // Retourne les avis associés au livre
  }
}