
import { FC } from "react";
import { BookModel } from "../../models/BookModel";

interface Props {
    book: BookModel;
}

const BookCardDetail: FC<Props> = ({ book }) => {
    return (
        <>
            <br />
            <span>Title: {book.title}</span>
            <br />
            <span>Year published: {book.publicationDate}</span>
            <br />
            <span>Author: {book.authorId}  </span>
            <button onClick={() => window.location.href = `/authors/${book.authorId}`}>
                View Author
            </button>
            <br />
            <span>Prix: {book.note ? book.note : "N/A"}</span>
        </>
    );
};

export default BookCardDetail;