import { AuthorEntity } from './author.entity';
import { AuthorsService } from './authors.service';
import { UUID } from 'crypto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    getAllAuthors(): Promise<AuthorEntity[]>;
    getAuthorById(id: UUID): Promise<AuthorEntity>;
    getAuthorByName(nom: string): Promise<AuthorEntity[]>;
    createAuthor(createAuthorDto: any): void;
    deleteAuthor(id: UUID): void;
    deleteAuthorByName(nom: string): void;
}
