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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const author_repository_1 = require("./author.repository");
const author_entity_1 = require("./author.entity");
let AuthorsService = class AuthorsService {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async createAuthor(createAuthorDto) {
        let author = new author_entity_1.AuthorEntity();
        author.id = createAuthorDto.id;
        author.nom = createAuthorDto.nom;
        author.photo = createAuthorDto.photo;
        author.nbr_livres_ecrits = createAuthorDto.nbr_livres_ecrits;
        author.moyenne_avis = createAuthorDto.moyenne_avis;
        this.authorRepository.createAuthor(author);
        return author.id;
    }
    async getAllAuthors() {
        return this.authorRepository.findAll();
    }
    async getAuthorById(id) {
        return this.authorRepository.findOneById(id);
    }
    async getAuthorByName(nom) {
        return this.authorRepository.findOneByName(nom);
    }
    deleteAuthor(id) {
        this.authorRepository.deleteAuthor(id);
    }
    deleteAllAuthors() {
        this.authorRepository.deleteAllAuthors();
    }
    updateAuthor(id, updateAuthorDto) {
        this.authorRepository.updateAuthor(id, updateAuthorDto);
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [author_repository_1.AuthorRepository])
], AuthorsService);
//# sourceMappingURL=authors.service.js.map