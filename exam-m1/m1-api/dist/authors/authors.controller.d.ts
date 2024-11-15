import { AuthorEntity } from './author.entity';
import { AuthorsService } from './authors.service';
import { UUID } from 'crypto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    getAllAuthors(): Promise<AuthorEntity[]>;
    getAuthorById(id: UUID): Promise<AuthorEntity>;
    getAuthorByName(nom: string): Promise<AuthorEntity[]>;
    createAuthor(createAuthorDto: any): Promise<UUID>;
    deleteAuthor(id: UUID): void;
    deleteAllAuthors(): void;
    updateAuthor(id: UUID, updateAuthorDto: any): void;
}
