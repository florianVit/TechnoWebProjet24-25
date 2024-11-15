import { AuthorRepository } from './author.repository';
import { AuthorEntity } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UUID } from 'crypto';
export declare class AuthorsService {
    private readonly authorRepository;
    constructor(authorRepository: AuthorRepository);
    createAuthor(createAuthorDto: CreateAuthorDto): Promise<UUID>;
    getAllAuthors(): Promise<AuthorEntity[]>;
    getAuthorById(id: UUID): Promise<AuthorEntity>;
    getAuthorByName(nom: string): Promise<AuthorEntity[]>;
    deleteAuthor(id: UUID): void;
    deleteAllAuthors(): void;
    updateAuthor(id: UUID, updateAuthorDto: any): void;
}
