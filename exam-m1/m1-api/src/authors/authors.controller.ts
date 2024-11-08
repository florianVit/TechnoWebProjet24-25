import { Controller, Get,Post,Delete, Param, Body } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
    @Get()//Récupérer tous les auteurs
    getAllAuthors() {
      
    }

    @Get(':id')//Récupérer un auteur par son ID
    getAuthorById(@Param('id') id: string) {
      
    }

    @Post()//Créer un nouvel auteur
    createAuthor(@Body() createAuthorDto) {
      
    }

    @Delete(':id')//Supprimer un auteur
    deleteAuthor(@Param('id') id: string) {
      
    }

}


