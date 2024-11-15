import { IsUUID, IsString, IsNumber, IsArray } from "class-validator";
import { UUID } from "crypto";
import { BookEntity } from "src/books/entities/books.entity";

export class CreateAuthorDto {
    @IsUUID('4')
    id: UUID;

    @IsString()
    nom: string;

    @IsString()
    photo: string;

    @IsNumber()
    nbr_livres_ecrits: number;

    @IsNumber()
    moyenne_avis: number;
    
    @IsString()
    biographie: string;

    @IsArray()
    liste_livre: BookEntity[];
}