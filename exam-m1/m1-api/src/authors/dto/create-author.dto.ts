import { IsUUID, IsString, IsNumber } from "class-validator";
import { UUID } from "crypto";

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
}