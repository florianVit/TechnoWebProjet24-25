import { UUID } from "crypto";
export declare class UpdateAuthorDto {
    id: UUID;
    nom?: string;
    photo?: string;
    nbr_livres_ecrits?: number;
    moyenne_avis?: number;
}
