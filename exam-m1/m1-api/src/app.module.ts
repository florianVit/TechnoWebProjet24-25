import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsService } from './authors/authors.service';
import { AuthorRepository } from './authors/author.repository';
import { AuthorEntity } from './authors/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './books/entities/books.entity';

//clean author dans un fichier author module

@Module({
  imports: [DatabaseModule, BooksModule, AuthorsModule, TypeOrmModule.forFeature([AuthorEntity,BookEntity])],
  controllers: [AppController],
  providers: [AppService, AuthorsService, AuthorRepository],
})
export class AppModule {}
