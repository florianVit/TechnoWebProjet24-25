import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  note: number;
  
  @Column({ nullable: true })
  commentaire?: string;

  @Column({ nullable: true })
  prix: number;

  @Column({ nullable: true })
  description: string;
}