import { AuthorEntity } from './author.entity';
import { AuthorsService } from './authors.service';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    getAllAuthors(): Promise<AuthorEntity[]>;
    getAuthorById(id: string): void;
    createAuthor(createAuthorDto: any): void;
    deleteAuthor(id: string): void;
}
