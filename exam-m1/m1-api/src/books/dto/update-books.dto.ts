import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { UUID } from "crypto";

export class UpdateBookDto {
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


  //champs optionnels
  @IsOptional() 
  @IsNumber()
  note?: number; 

  @IsOptional() 
  @IsString()  
  commentaire?: string;  

  @IsOptional() 
  @IsNumber()
  prix?: number;

  @IsOptional()
  @IsString()
  description: string;
  }