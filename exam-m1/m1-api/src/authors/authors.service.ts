import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorEntity } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UUID } from 'crypto';

@Injectable()
export class AuthorsService {
    constructor(private readonly authorRepository: AuthorRepository) {}

    createAuthor(createAuthorDto: CreateAuthorDto) {
        let author = new AuthorEntity();
        author.id = createAuthorDto.id;
        author.nom = createAuthorDto.nom;
        author.photo = createAuthorDto.photo;
        author.nbr_livres_ecrits = createAuthorDto.nbr_livres_ecrits;
        author.moyenne_avis = createAuthorDto.moyenne_avis;

        //On met dans le repository avec le createAuthor de AuthorRepository
        this.authorRepository.createAuthor(author);
    }
    async getAllAuthors(): Promise<AuthorEntity[]> {
        return this.authorRepository.findAll();
    }
    async getAuthorById(id: UUID) {
        return this.authorRepository.findOneById(id);
    }
    async getAuthorByName(nom: string) {
        return this.authorRepository.findOneByName(nom);
    }
}
