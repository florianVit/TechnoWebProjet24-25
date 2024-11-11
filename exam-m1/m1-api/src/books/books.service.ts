import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-books.dto';
import { UpdateBookDto } from './dto/update-books.dto';
import { Book } from './entities/books.entity';

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

  //Mettre à jour un livre
  update(id: string, createBookDto: CreateBookDto) {
    const bookIndex = this.books.findIndex(b => b.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books[bookIndex] = { id, ...createBookDto };
    return this.books[bookIndex];
  }

  //Supprimer tous les livres
  removeAll() {
    this.books = [];
    return { message: 'All books have been removed' };
  }

  //Trouver un livre par son titre
  findByTitle(title: string) {
    const book = this.books.find(b => b.title === title);
    if (!book) {
      throw new NotFoundException(`Book with title ${title} not found`);
    }
    return book;
  }

  
}
