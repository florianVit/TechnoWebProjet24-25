import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books = []; // Simuler une base de données

  // Méthode pour récupérer tous les livres
  findAll() {
    return this.books;
  }

  // Méthode pour trouver un livre par ID
  findOne(id: string) {
    const book = this.books.find(b => b.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  // Méthode pour créer un livre
  create(createBookDto: CreateBookDto) {
    const newBook = { id: Date.now().toString(), ...createBookDto };
    this.books.push(newBook);
    return newBook;
  }

  // Méthode pour supprimer un livre
  remove(id: string) {
    const bookIndex = this.books.findIndex(b => b.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books.splice(bookIndex, 1);
    return { message: `Book with ID ${id} has been removed` };
  }
}
