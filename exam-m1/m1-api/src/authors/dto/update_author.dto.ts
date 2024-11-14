import { IsUUID, IsString, IsNumber, IsOptional } from "class-validator";
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
}