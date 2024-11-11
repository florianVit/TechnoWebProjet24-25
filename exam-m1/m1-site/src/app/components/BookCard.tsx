import { FC } from "react"
import { BookModel } from "../models/BookModel"

type Props = {
  book: BookModel
}

export const BookCard: FC<Props> = ({ book }) => {
  return <div>
    - {book.title} ({book.publicationDate}) - {book.authorId} - {book.note} - {book.commentaire} - {book.prix} - {book.description}
    <br/>
  </div>
}