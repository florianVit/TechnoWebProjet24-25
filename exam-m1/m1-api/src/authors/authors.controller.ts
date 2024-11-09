import { Controller, Get,Post,Delete, Param, Body } from '@nestjs/common';
import { AuthorEntity } from './author.entity';
import { AuthorsService } from './authors.service';
import { UUID } from 'crypto';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    @Get('/select-all/find')//Récupérer tous les auteurs
    async getAllAuthors() : Promise<AuthorEntity[]> {
       return this.authorsService.getAllAuthors(); //On appelle la fonction getAllAuthors du service
        //qui renvoie tous les auteurs
    }

    @Get('/by-id/find/:id')//Récupérer un auteur par son ID
    getAuthorById(@Param('id') id: UUID) {
        return this.authorsService.getAuthorById(id); //On appelle la fonction getAuthorById du service
        //qui renvoie l'auteur avec l'id passé
    }

    @Get('/by-name/find/:nom')//Récupérer un auteur par son nom
    getAuthorByName(@Param('nom') nom: string) {
        return this.authorsService.getAuthorByName(nom); //On appelle la fonction getAuthorByName du service
        //qui renvoie l'auteur avec le nom
    }

    @Post('/create-author')//Créer un nouvel auteur
    createAuthor(@Body() createAuthorDto){
        this.authorsService.createAuthor(createAuthorDto); //On appelle la fonction createAuthor du service 
        //avec comme paramètre le createAuthorDto qui contient les infos de l'auteur à  créer
    }

    @Delete('/by-id/delete/:id')//Supprimer un auteur
    deleteAuthor(@Param('id') id: UUID) {
        //this.authorsService.deleteAuthor(id);
    }

    @Delete('/by-name/delete/:nom')//Supprimer un auteur
    deleteAuthorByName(@Param('nom') nom: string) {
        //this.authorsService.deleteAuthorByName(nom);
    }
    
    //@Delete('/select-all/delete')//Supprimer un auteur

}


