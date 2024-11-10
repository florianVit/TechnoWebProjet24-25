import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

  @Get()//Récupérer tous les livres
  getAllBooks() {
    return this.booksService.findAll(); // Appelle le service pour récupérer tous les livres
  }

  @Get(':id')//Récupérer un livre par son ID
  getBookById(@Param('id') id: string) {
    return this.booksService.findOne(id); // Appelle le service pour trouver un livre par ID
  }

  @Post()//Créer un nouveau livre
  createBook(@Body() createBookDto) {
    return this.booksService.create(createBookDto); // Appelle le service pour créer un livre
  }

  @Delete(':id')//Supprimer un livre
  deleteBook(@Param('id') id: string) {
    return this.booksService.remove(id); // Appelle le service pour supprimer un livre par ID
  }

  @Post(':id')//Mettre à jour un livre
  updateBook(@Param('id') id: string, @Body() createBookDto) {
    return this.booksService.update(id, createBookDto); // Appelle le service pour mettre à jour un livre par ID
  }
}
