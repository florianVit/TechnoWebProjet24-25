import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books = []; //base de données

  //Récupérer tous les livres
  findAll() {
    return this.books;
  }

  //Trouver un livre par ID
  findOne(id: string) {
    const book = this.books.find(b => b.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  //Créer un livre
  create(createBookDto: CreateBookDto) {
    const newBook = { id: Date.now().toString(), ...createBookDto };
    this.books.push(newBook);
    return newBook;
  }

  //Supprimer un livre
  remove(id: string) {
    const bookIndex = this.books.findIndex(b => b.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books.splice(bookIndex, 1);
    return { message: `Book with ID ${id} has been removed` };
  }
}
