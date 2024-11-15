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
    async createAuthor(@Body() createAuthorDto) : Promise<UUID> {
        let id = this.authorsService.createAuthor(createAuthorDto); //On appelle la fonction createAuthor du service 
        return id;
        //avec comme paramètre le createAuthorDto qui contient les infos de l'auteur à  créer
    }
    
    @Delete('/by-id/delete/:id')//Supprimer un auteur en fonction de son ID (on fait pas par nom au cas où 2 auteurs ont le même nom)
    deleteAuthor(@Param('id') id: UUID) {
        this.authorsService.deleteAuthor(id);
    }   
    
    @Delete('/select-all/delete')//Supprimer les auteurs
    deleteAllAuthors() {
        this.authorsService.deleteAllAuthors();
    }

    @Post('/update-author/:id')//Mettre à jour un auteur
    updateAuthor(@Param('id') id : UUID, @Body() updateAuthorDto) {
        this.authorsService.updateAuthor(id, updateAuthorDto);
    }

}


