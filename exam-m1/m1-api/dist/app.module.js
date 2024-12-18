"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./modules/database/database.module");
const books_module_1 = require("./books/books.module");
const authors_module_1 = require("./authors/authors.module");
const authors_service_1 = require("./authors/authors.service");
const author_repository_1 = require("./authors/author.repository");
const author_entity_1 = require("./authors/author.entity");
const typeorm_1 = require("@nestjs/typeorm");
const books_entity_1 = require("./books/entities/books.entity");
const reviews_module_1 = require("./reviews/reviews.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, books_module_1.BooksModule, authors_module_1.AuthorsModule, typeorm_1.TypeOrmModule.forFeature([author_entity_1.AuthorEntity, books_entity_1.BookEntity]), reviews_module_1.ReviewModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, authors_service_1.AuthorsService, author_repository_1.AuthorRepository],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map