import { UUID } from 'crypto';
export type AuthorId = UUID;
export declare class AuthorEntity {
    id: AuthorId;
    nom: string;
    photo: string;
    nbr_livres_ecrits: number;
    moyenne_avis: number;
}
