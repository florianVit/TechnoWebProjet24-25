import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';  
import { BookEntity } from '../books/entities/books.entity'; 
import { ReviewService } from './reviews.service';  
import { ReviewController } from './reviews.controller';  


@Module({
  imports: [TypeOrmModule.forFeature([Review, BookEntity])],
  providers: [ReviewService],
  controllers: [ReviewController],  
})
export class ReviewModule {}