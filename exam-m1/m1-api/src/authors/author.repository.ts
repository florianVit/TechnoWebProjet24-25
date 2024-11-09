import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';

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
}
