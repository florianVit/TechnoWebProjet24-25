import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/books.entity';
import { UUID } from 'crypto';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly repo: Repository<BookEntity>,
  ) {}

  // Créer un livre
  async createBook(book: BookEntity): Promise<BookEntity> {
    return this.repo.save(book); // Sauvegarde dans la base de données
  }

  // Récupérer tous les livres
  async findAll(): Promise<BookEntity[]> {
    return this.repo.find();
  }

  // Trouver un livre par ID
  async findOneById(id: string): Promise<BookEntity> {
    return this.repo.findOneBy({ id });
  }

  // Trouver des livres par titre
  async findByTitle(title: string): Promise<BookEntity[]> {
    return this.repo.find({ where: { title } });
  }

  // Supprimer un livre par ID
  async deleteBook(id: UUID): Promise<void> {
    console.log("Id du livre supprimé : ", id);
    await this.repo.delete(id);
  }

  // Supprimer tous les livres
  async deleteAllBooks(): Promise<void> {
    const books = await this.repo.find();
    for (const book of books) {
      await this.repo.delete(book.id);
    }
  }
}
