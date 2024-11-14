import { Repository } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { UUID } from 'crypto';
export declare class AuthorRepository {
    private readonly repo;
    constructor(repo: Repository<AuthorEntity>);
    createAuthor(auteur: AuthorEntity): Promise<AuthorEntity>;
    findAll(): Promise<AuthorEntity[]>;
    findOneById(id: UUID): Promise<AuthorEntity>;
    findOneByName(nom: string): Promise<AuthorEntity[]>;
    deleteAuthor(id: UUID): Promise<void>;
    deleteAllAuthors(): Promise<void>;
    updateAuthor(id: UUID, auteur: Partial<AuthorEntity>): void;
}
