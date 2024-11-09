import { Repository } from 'typeorm';
import { AuthorEntity } from './author.entity';
export declare class AuthorRepository {
    private readonly repo;
    constructor(repo: Repository<AuthorEntity>);
    createAuthor(auteur: AuthorEntity): Promise<AuthorEntity>;
    findAll(): Promise<AuthorEntity[]>;
}
