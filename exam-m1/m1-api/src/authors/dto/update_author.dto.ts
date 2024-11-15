import { IsUUID, IsString, IsNumber, IsOptional, IsArray } from "class-validator";
import { UUID } from "crypto";

export class UpdateAuthorDto {
    @IsUUID('4')
    id: UUID;

    @IsOptional()
    @IsString()
    nom?: string;

    @IsOptional()
    @IsString()
    photo?: string;

    @IsOptional()
    @IsNumber()
    nbr_livres_ecrits?: number;

    @IsOptional()
    @IsNumber()
    moyenne_avis?: number;

    @IsOptional()
    @IsString()
    biographie?: string;

    @IsOptional()
    @IsArray()
    liste_livre?: string[];
}