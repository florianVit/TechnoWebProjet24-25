import { FC } from "react"
import { BookModel } from "../models/BookModel"

type Props = {
  book: BookModel
}

export const BookCard: FC<Props> = ({ book }) => {
  return <div>
    {/* ici c'est l'id de l'auteur, il faudra récupérer le nom de l'auteur plus tard */}
    - {book.title} ({book.publicationDate}) - {book.authorId} | Note : {book.note}
    <br/>
  </div>
}