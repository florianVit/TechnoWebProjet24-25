import { UUID } from "crypto";
import { BookEntity } from "src/books/entities/books.entity";
export declare class CreateAuthorDto {
    id: UUID;
    nom: string;
    photo: string;
    nbr_livres_ecrits: number;
    moyenne_avis: number;
    biographie: string;
    liste_livre: BookEntity[];
}
