import { Review } from 'src/reviews/review.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  authorId: string;

  @Column()
  publicationDate: string;


  @Column({ nullable: true })
  prix: number;

  @Column({ nullable: true })
  description: string;
  
  // Définition de la relation OneToMany avec Review
  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];  // Cela permet d'avoir une propriété `reviews` sur un objet `Book`
}