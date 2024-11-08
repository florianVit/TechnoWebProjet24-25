import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDate()
  publicationDate: Date;

  @IsString()
  @IsNotEmpty()
  authorId: string;
}