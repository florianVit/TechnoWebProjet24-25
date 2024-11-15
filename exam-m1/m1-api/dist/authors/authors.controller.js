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
exports.AuthorsController = void 0;
const common_1 = require("@nestjs/common");
const authors_service_1 = require("./authors.service");
let AuthorsController = class AuthorsController {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    async getAllAuthors() {
        return this.authorsService.getAllAuthors();
    }
    getAuthorById(id) {
        return this.authorsService.getAuthorById(id);
    }
    getAuthorByName(nom) {
        return this.authorsService.getAuthorByName(nom);
    }
    async createAuthor(createAuthorDto) {
        let id = this.authorsService.createAuthor(createAuthorDto);
        return id;
    }
    deleteAuthor(id) {
        this.authorsService.deleteAuthor(id);
    }
    deleteAllAuthors() {
        this.authorsService.deleteAllAuthors();
    }
    updateAuthor(id, updateAuthorDto) {
        this.authorsService.updateAuthor(id, updateAuthorDto);
    }
};
exports.AuthorsController = AuthorsController;
__decorate([
    (0, common_1.Get)('/select-all/find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "getAllAuthors", null);
__decorate([
    (0, common_1.Get)('/by-id/find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "getAuthorById", null);
__decorate([
    (0, common_1.Get)('/by-name/find/:nom'),
    __param(0, (0, common_1.Param)('nom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "getAuthorByName", null);
__decorate([
    (0, common_1.Post)('/create-author'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Delete)('/by-id/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "deleteAuthor", null);
__decorate([
    (0, common_1.Delete)('/select-all/delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "deleteAllAuthors", null);
__decorate([
    (0, common_1.Post)('/update-author/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "updateAuthor", null);
exports.AuthorsController = AuthorsController = __decorate([
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService])
], AuthorsController);
//# sourceMappingURL=authors.controller.js.map