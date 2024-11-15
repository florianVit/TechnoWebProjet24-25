import { Injectable } from '@nestjs/common';
import { BookRepository } from './books.repository';
import { BookEntity } from './entities/books.entity';
import { CreateBookDto } from './dto/create-books.dto';
import { UUID } from 'crypto';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  // Créer un nouveau livre
  async createBook(createBookDto: Partial<BookEntity>): Promise<{ id: string }> {
    // Créez une instance de BookEntity et remplissez-la avec les données du DTO
    const book = new BookEntity();
    book.title = createBookDto.title;
    book.authorId = createBookDto.authorId;
    book.prix = createBookDto.prix || null;
    book.description = createBookDto.description || null;
    book.publicationDate = createBookDto.publicationDate;
  
    // Sauvegardez le livre dans la base de données
    const savedBook = await this.bookRepository.createBook(book);
  
    // Renvoyez uniquement l'ID
    return { id: savedBook.id };
  
  }

  // Récupérer tous les livres
  async getAllBooks(): Promise<BookEntity[]> {
    return this.bookRepository.findAll();
  }

  // Récupérer un livre par ID
  async getBookById(id: UUID): Promise<BookEntity> {
    return this.bookRepository.findOneById(id);
  }

  // Supprimer un livre par ID
  async removeBook(id: UUID): Promise<void> {
    await this.bookRepository.deleteBook(id);
  }

  // Mettre à jour un livre par ID
  async updateBook(id: UUID, bookData: Partial<BookEntity>): Promise<BookEntity> {
    const book = new BookEntity();
    Object.assign(book, bookData);
    book.id = id;
    return this.bookRepository.createBook(book);
  }
}
