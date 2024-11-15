import { FC } from "react"
import { BookModel } from "../../models/BookModel"
import { useRouter } from "next/navigation"

type Props = {
  book: BookModel
  authorName: string
}

export const BookCard: FC<Props> = ({ book, authorName }) => {
  const router = useRouter();

  return <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px", boxShadow: "2px 2px 12px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "5px" }}>
    <h2 style={{ margin: "0" }}>{book.title}</h2>
    <p style={{ margin: "0" }}><strong>Publication Date:</strong> {book.publicationDate}</p>
    <p style={{ margin: "0" }}><strong>Author:</strong> {authorName}</p>
    <p style={{ margin: "0" }}><strong>Note:</strong> {book.note ? book.note : "N/A"}</p>
    <input type="button" value="Détails" onClick={() => {router.push(`/books/${book.id}`);}} style={{ padding: "5px 10px", cursor: "pointer", alignSelf: "flex-start" }} />
  </div>
}