import { FC } from "react"
import { BookModel } from "../../models/BookModel"
import { useRouter } from "next/navigation"

type Props = {
  book: BookModel
  authorName: string
}

export const BookCard: FC<Props> = ({ book, authorName }) => {
  const router = useRouter();

  return <div>
    - {book.title} ({book.publicationDate}) - {authorName} | Note : {book.note ? book.note : "N/A"}
    <input type="button" value="Détails" onClick={() => {router.push(`/books/${book.id}`);
    }} />
    <br />
  </div>
}