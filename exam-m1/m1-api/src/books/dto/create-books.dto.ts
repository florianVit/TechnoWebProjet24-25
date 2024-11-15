import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { UUID } from "crypto";

export class CreateBookDto {
  //champs obligatoires
  @IsNotEmpty()
  @IsString()
  title: string;  

  @IsNotEmpty()
  @IsString()
  authorId: string;

  @IsNotEmpty()
  @IsDateString()
  publicationDate: string;


  @IsOptional() 
  @IsNumber()
  prix?: number;

  @IsOptional()
  @IsString()
  description: string;

}
