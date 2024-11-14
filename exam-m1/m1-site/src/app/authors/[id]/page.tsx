'use client';
import { FC, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Modal } from "../../components/Author/Modal";
import { Button } from "../../components/Author/Button";

interface AuthorDetails {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
}

const AuthorDetailsPage: FC = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState<AuthorDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const loadAuthor = () => {
    fetch(`http://localhost:3001/authors/by-id/find/${id}`)
      .then(response => response.json())
      .then(data => setAuthor(data))
      .catch(error => console.error("Error fetching author:", error));
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/authors/by-id/delete/${id}`, { method: 'DELETE' })
      .then(() => {
        router.push('/authors'); // Redirect to authors list after deletion
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
          <img src={author.photo} alt={`${author.nom}'s photo`} style={{ maxWidth: '500px', height: 'auto' }}/>
          <h2>{author.nom}</h2>
          <p>Books Written: {author.nbr_livres_ecrits}</p>
          <p>Average Rating: {author.moyenne_avis}</p>
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
