import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    publicationDate: Date;

    @Column()
    author: string;

    @Column({ nullable: true })
    averageRating: number;
}