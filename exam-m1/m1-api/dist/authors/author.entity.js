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
exports.AuthorEntity = void 0;
const typeorm_1 = require("typeorm");
let AuthorEntity = class AuthorEntity {
};
exports.AuthorEntity = AuthorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AuthorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nom', type: 'varchar' }),
    __metadata("design:type", String)
], AuthorEntity.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'photo', type: 'varchar' }),
    __metadata("design:type", String)
], AuthorEntity.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nbr_livres_ecrits', type: 'int' }),
    __metadata("design:type", Number)
], AuthorEntity.prototype, "nbr_livres_ecrits", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'moyenne_avis', type: 'int' }),
    __metadata("design:type", Number)
], AuthorEntity.prototype, "moyenne_avis", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'biographie', type: 'varchar' }),
    __metadata("design:type", String)
], AuthorEntity.prototype, "biographie", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'liste_livre', type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], AuthorEntity.prototype, "liste_livre", void 0);
exports.AuthorEntity = AuthorEntity = __decorate([
    (0, typeorm_1.Entity)('Author')
], AuthorEntity);
//# sourceMappingURL=author.entity.js.map