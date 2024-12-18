"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const author_entity_1 = require("./author.entity");
let AuthorRepository = class AuthorRepository {
    constructor(repo) {
        this.repo = repo;
    }
    async createAuthor(auteur) {
        return this.repo.save(auteur);
    }
    async findAll() {
        return this.repo.find();
    }
    async findOneById(id) {
        return this.repo.findOneBy({ id });
    }
    async findOneByName(nom) {
        return this.repo.find({ where: { nom } });
    }
    async deleteAuthor(id) {
        console.log("Id de l'auteur supprimé : ", id);
        await this.repo.delete(id);
    }
    async deleteAllAuthors() {
        const authors = await this.repo.find();
        for (const author of authors) {
            await this.repo.delete(author.id);
        }
    }
    updateAuthor(id, auteur) {
        this.repo.update(id, auteur);
    }
};
exports.AuthorRepository = AuthorRepository;
exports.AuthorRepository = AuthorRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(author_entity_1.AuthorEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuthorRepository);
//# sourceMappingURL=author.repository.js.map