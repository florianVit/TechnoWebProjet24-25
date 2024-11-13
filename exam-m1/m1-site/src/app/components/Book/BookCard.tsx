import { FC } from "react"
import { BookModel } from "../../models/BookModel"
import { useRouter } from "next/navigation"

type Props = {
  book: BookModel
}

export const BookCard: FC<Props> = ({ book }) => {
  const router = useRouter();

  return <div>
    {/* ici c'est l'id de l'auteur, il faudra récupérer le nom de l'auteur plus tard */}
    - {book.title} ({book.publicationDate}) - {book.authorId} | Note : {book.note ? book.note : "N/A  " }
    <input type="button" value="Détails" onClick={() => {router.push(`/books/${book.id}`);
    }} />
    <br />
  </div>
}