import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { BookEntity } from '../books/entities/books.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => BookEntity, (book) => book.reviews)
  @JoinColumn({ name: 'bookId' })
  book: BookEntity;  // Relation avec BookEntity

  @Column()
  rating: number;

  @Column({ nullable: true })
  comment: string;
}