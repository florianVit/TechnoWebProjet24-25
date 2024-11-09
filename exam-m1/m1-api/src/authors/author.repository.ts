import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { UUID } from 'crypto';

@Injectable()
export class AuthorRepository {
    constructor(
        @InjectRepository(AuthorEntity)
        private readonly repo: Repository<AuthorEntity>,
    ) {}
    async createAuthor(auteur: AuthorEntity): Promise<AuthorEntity> {
        return this.repo.save(auteur);//On écrit dans la bdd
    }
    async findAll(): Promise<AuthorEntity[]> {
        return this.repo.find();
    }
    async findOneById(id: UUID): Promise<AuthorEntity> {
        return this.repo.findOneBy({ id });
    }
    async findOneByName(nom: string): Promise<AuthorEntity[]> {
        return this.repo.find({ where: { nom } });
    }
}
