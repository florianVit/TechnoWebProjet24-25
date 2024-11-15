import { UUID } from 'crypto';
import { BookEntity } from 'src/books/entities/books.entity';
export type AuthorId = UUID;
export declare class AuthorEntity {
    id: AuthorId;
    nom: string;
    photo: string;
    nbr_livres_ecrits: number;
    moyenne_avis: number;
    biographie: string;
    liste_livre?: BookEntity[];
}
