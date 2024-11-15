import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/authors/author.entity';
import { BookEntity } from 'src/books/entities/books.entity';
import { Review } from 'src/reviews/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}', AuthorEntity, BookEntity, Review],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
