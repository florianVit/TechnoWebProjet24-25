import { AuthorRepository } from './author.repository';
import { AuthorEntity } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
export declare class AuthorsService {
    private readonly authorRepository;
    constructor(authorRepository: AuthorRepository);
    createAuthor(createAuthorDto: CreateAuthorDto): void;
    getAllAuthors(): Promise<AuthorEntity[]>;
}
