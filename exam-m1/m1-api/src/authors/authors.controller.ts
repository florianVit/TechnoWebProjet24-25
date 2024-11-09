import { Controller, Get,Post,Delete, Param, Body } from '@nestjs/common';
import { AuthorEntity } from './author.entity';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    @Get()//Récupérer tous les auteurs
    async getAllAuthors() : Promise<AuthorEntity[]> {
       return this.authorsService.getAllAuthors(); //On appelle la fonction getAllAuthors du service
        //qui renvoie tous les auteurs
    }

    @Get(':id')//Récupérer un auteur par son ID
    getAuthorById(@Param('id') id: string) {
      
    }

    @Post()//Créer un nouvel auteur
    createAuthor(@Body() createAuthorDto){
        this.authorsService.createAuthor(createAuthorDto); //On appelle la fonction createAuthor du service 
        //avec comme paramètre le createAuthorDto qui contient les infos de l'auteur à  créer
    }

    @Delete(':id')//Supprimer un auteur
    deleteAuthor(@Param('id') id: string) {
      
    }

}


