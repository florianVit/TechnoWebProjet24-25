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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./review.entity");
const books_entity_1 = require("../books/entities/books.entity");
let ReviewService = class ReviewService {
    constructor(reviewRepository, bookRepository) {
        this.reviewRepository = reviewRepository;
        this.bookRepository = bookRepository;
    }
    async createReview(bookId, createReviewDto) {
        const { rating, comment } = createReviewDto;
        const book = await this.bookRepository.findOne({ where: { id: bookId } });
        if (!book) {
            throw new common_1.NotFoundException('Livre non trouvé');
        }
        const review = this.reviewRepository.create({
            rating,
            comment,
            book,
        });
        return await this.reviewRepository.save(review);
    }
    async getReviewsForBook(bookId) {
        const book = await this.bookRepository.findOne({ where: { id: bookId }, relations: ['reviews'] });
        if (!book) {
            throw new common_1.NotFoundException('Livre non trouvé');
        }
        return book.reviews;
    }
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __param(1, (0, typeorm_1.InjectRepository)(books_entity_1.BookEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReviewService);
//# sourceMappingURL=reviews.service.js.map