import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { UUID } from "crypto";

export class CreateReviewDto {
  // La note sur 5
  @IsNotEmpty()
  @IsNumber()
  @Min(1) 
  @Max(5)  
  rating: number;

  // Le commentaire est optionnel
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  comment?: string;

}
