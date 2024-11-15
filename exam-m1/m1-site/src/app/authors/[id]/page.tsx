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
  biographie: string; 
  liste_livre: string[]; 
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

  // Function to load author data
  const loadAuthor = () => {
    fetch(`http://localhost:3001/authors/by-id/find/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Author Data:', data);

        if (data) {
          setAuthor(data);
          
          // Check if the 'liste_livre' field is available
          if (data.liste_livre) {
            console.log('Books list:', data.liste_livre);
            loadBooksByIds(data.liste_livre); 
          } else {
            console.error("Error: liste_livre is undefined.");
          }
        } else {
          console.error("Error: No data returned from the server.");
        }
      })
      .catch(error => {
        console.error("Error fetching author:", error);
      });
  };

  const loadBook = (bookId: string): Promise<Book | null> => {
    console.log(`Fetching book with ID:`, bookId); 
    return fetch(`http://localhost:3001/books/${bookId}`)
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .catch(error => {
        console.error(`Error fetching book with ID ${bookId}:`, error);
        return null;
      });
  };  

  // Function to load multiple books by their IDs
  const loadBooksByIds = (bookIds: string[]) => {
    if (bookIds && bookIds.length > 0) {
      const bookFetches = bookIds.map(bookId => loadBook(bookId));
      Promise.all(bookFetches)
        .then((booksData) => {
          setBooks(booksData.filter(Boolean) as Book[]);
        })
        .catch(error => {
          console.error("Error fetching books:", error);
          setBooks([]);
        });
    } else {
      console.error("Error: bookIds list is empty or invalid.");
    }
  };

  // Function to handle deletion of an author
  const handleDelete = () => {
    fetch(`http://localhost:3001/authors/by-id/delete/${id}`, { method: 'DELETE' })
      .then(() => {
        router.push('/authors');
      })
      .catch(error => console.error("Error deleting author:", error));
  };

  // Fetch author data when the component mounts or the 'id' changes
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

          {/* Display Biography */}
          <h3>Biography</h3>
          <p>{author.biographie}</p>

          <h3>Books Written:</h3>
          {books.length > 0 ? (
            <ul>
              {books.map(book => (
                <li key={book.id}>
                  <h4>{book.title}</h4>
                  <p>Publication Date: {new Date(book.publicationDate).toLocaleDateString()}</p>
                  <Button onClick={() => router.push(`/books/${book.id}`)}>View Book Details</Button>
                </li>
              ))}
            </ul>
          ) : (
            <p>This author has not written any books yet.</p>
          )}

          {/* Delete Author Button */}
          <Button onClick={() => setIsModalOpen(true)}>Delete Author</Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Confirmation Modal for Deletion */}
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
