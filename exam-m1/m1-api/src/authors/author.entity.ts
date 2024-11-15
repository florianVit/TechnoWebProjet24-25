import { UUID } from 'crypto';
import { BookEntity } from 'src/books/entities/books.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type AuthorId = UUID;

@Entity('Author')
export class AuthorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: AuthorId;

    @Column({ name: 'nom', type: 'varchar' })
    nom: string;

    @Column({ name: 'photo', type: 'varchar' })
    photo: string;

    @Column({ name: 'nbr_livres_ecrits', type: 'int' })
    nbr_livres_ecrits: number;

    @Column({ name: 'moyenne_avis', type: 'int' })
    moyenne_avis: number;

    @Column({ name: 'biographie', type: 'varchar' })
    biographie: string;

    @Column({ name: 'liste_livre', type: 'simple-array', nullable: true })
    liste_livre?: BookEntity[];

}
