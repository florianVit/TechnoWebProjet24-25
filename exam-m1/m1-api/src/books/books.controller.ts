import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-books.dto';
import { BookEntity } from './entities/books.entity';
import { UUID } from 'crypto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Récupérer tous les livres
  @Get()
  async getAllBooks(): Promise<BookEntity[]> {
    return await this.booksService.getAllBooks(); // Appelle le service pour récupérer tous les livres
  }

  // Récupérer un livre par son ID
  @Get(':id')
  async getBookById(@Param('id') id: UUID): Promise<BookEntity> {
    return await this.booksService.getBookById(id); // Appelle le service pour trouver un livre par ID
  }

  // Créer un nouveau livre
  @Post() // Créer un livre
async createBook(@Body() createBookDto: CreateBookDto): Promise<{ id: string }> {
  return await this.booksService.createBook(createBookDto);
}

  // Supprimer un livre
  @Delete(':id')
  async deleteBook(@Param('id') id: UUID): Promise<{ message: string }> {
    await this.booksService.removeBook(id); // Appelle le service pour supprimer un livre par ID
    return { message: `Book with ID ${id} has been removed` };
  }

  // Mettre à jour un livre
  @Put(':id')
  async updateBook(@Param('id') id: UUID, @Body() createBookDto: CreateBookDto): Promise<BookEntity> {
    return await this.booksService.updateBook(id, createBookDto);
  }
}
