import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class UpdateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;            // Titre du livre
  
  
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    publicationDate: Date;    // Date de publication
    
  
    @IsString()
    @IsNotEmpty()
    authorId: string;         // ID de l'auteur
  
    @IsString()
    @IsNotEmpty()
    note: string;             //note du livre (de 1 à 5)
    @IsString()
    commentaire?: string;     // Commentaire optionnel
  
  
    @IsString()
    @IsNotEmpty()
    prix: string;            //prix du livre
  
    @IsString()
    @IsNotEmpty()
    description: string;      // Description du livre
  }