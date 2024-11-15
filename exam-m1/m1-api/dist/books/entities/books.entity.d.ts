import { Review } from 'src/reviews/review.entity';
export declare class BookEntity {
    id: string;
    title: string;
    authorId: string;
    publicationDate: string;
    note: number;
    commentaire?: string;
    prix: number;
    description: string;
    reviews: Review[];
}
