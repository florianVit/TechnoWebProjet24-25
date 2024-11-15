'use client';
import { FC, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Modal } from "../../components/Author/Modal";
import { Button } from "../../components/Author/Button";

interface AuthorDetails {
  id: string;
  nom: string;
  photo: string;
  moyenne_avis: number;
  liste_livre: string[];  // This is the correct field, replaced bookIds with liste_livre
}

interface Book {
  id: string;
  title: string;
  publicationDate: string;
  note: number;
}

const AuthorDetailsPage: FC = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState<AuthorDetails | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const loadAuthor = () => {
    fetch(`http://localhost:3001/authors/by-id/find/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Author Data:', data); // Debugging log
        setAuthor(data);
        if (data.liste_livre) {
          loadBooksByIds(data.liste_livre); // Use liste_livre instead of bookIds
        } else {
          console.error("Error: liste_livre is undefined.");
        }
      })
      .catch(error => console.error("Error fetching author:", error));
  };

  const loadBook = (bookId: string): Promise<Book | null> => {
    return fetch(`http://localhost:3001/books/${bookId}`)
      .then(response => response.json())
      .catch(error => {
        console.error(`Error fetching book with ID ${bookId}:`, error);
        return null;
      });
  };

  const loadBooksByIds = (bookIds: string[]) => {
    const bookFetches = bookIds.map(bookId => loadBook(bookId));
    Promise.all(bookFetches)
      .then((booksData) => {
        setBooks(booksData.filter(Boolean) as Book[]);
      })
      .catch(error => console.error("Error fetching books:", error));
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/authors/by-id/delete/${id}`, { method: 'DELETE' })
      .then(() => {
        router.push('/authors');
      })
      .catch(error => console.error("Error deleting author:", error));
  };

  useEffect(() => {
    loadAuthor();
  }, [id]);

  return (
    <>
      <h1>Author Details</h1>
      {author ? (
        <div>
          <img src={author.photo} alt={`${author.nom}'s photo`} style={{ maxWidth: '300px', height: 'auto' }} />
          <h2>{author.nom}</h2>
          <p>Average Rating: {author.moyenne_avis}</p>

          <h3>Books Written:</h3>
          {books.length > 0 ? (
            <ul>
              {books.map(book => (
                <li key={book.id}>
                  <h4>{book.title}</h4>
                  <p>Publication Date: {new Date(book.publicationDate).toLocaleDateString()}</p>
                  <p>Rating: {book.note}</p>
                  <Button onClick={() => router.push(`/books/${book.id}`)}>View Book Details</Button>
                </li>
              ))}
            </ul>
          ) : (
            <p>This author has not written any books yet.</p>
          )}

          <Button onClick={() => setIsModalOpen(true)}>Delete Author</Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Modal
        isOpen={isModalOpen}
        title="Delete Confirmation"
        onCancel={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
        onOk={handleDelete}
      >
        <p>Are you sure you want to delete this author?</p>
      </Modal>
    </>
  );
};

export default AuthorDetailsPage;
