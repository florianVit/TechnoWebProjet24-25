import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;            // Titre du livre

  @IsDate()
  publicationDate: Date;    // Date de publication

  @IsString()
  @IsNotEmpty()
  authorId: string;         // ID de l'auteur
}