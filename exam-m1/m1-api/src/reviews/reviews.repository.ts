import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity'; 
import { BookEntity } from '../books/entities/books.entity'; 
import { UUID } from 'crypto';

@Injectable()
export class ReviewRepository {
  constructor(
    @InjectRepository(Review)
    private readonly repo: Repository<Review>,
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  // Récupérer tous les avis pour un livre donné
  async findReviewsByBookId(bookId: string): Promise<Review[]> {
    return this.repo.find({
      where: {
        book: { id: bookId }, // Utilise la relation 'book' et son ID
      },
      relations: ['book'],  // Inclut les informations du livre associé
    });
  }

  // Créer un nouvel avis
  async createReview(review: Review): Promise<Review> {
    return this.repo.save(review); // Sauvegarde dans la base de données
  }
}
