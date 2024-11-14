import React from 'react';
import styles from '../../styles/Authors/Authors.module.css';
import { useRouter } from "next/navigation";

interface Author {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
}

interface AuthorCardProps {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
  deleteAuthor: (id: string) => void;
  triggerEdit: (author: Author) => void;
  className?: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ id, nom, photo, nbr_livres_ecrits, moyenne_avis, deleteAuthor, triggerEdit, className }) => {
  const router = useRouter();
  return (
    <div className={`${styles["author-card"]} ${className || ''}`}>
      <img src={photo} alt={`${nom}'s photo`} className={styles["author-photo"]} />
      <h3 className={styles["author-name"]}>{nom}</h3>
      <p className={styles["books-count"]}>Books Written: {nbr_livres_ecrits}</p>
      <p className={styles["rating"]}>Average Rating: {moyenne_avis}</p>

      <div className={styles["author-actions"]}>
        <button onClick={() => triggerEdit({ id, nom, photo, nbr_livres_ecrits, moyenne_avis })} className={styles["edit-button"]}>
          Edit
        </button>
        <button onClick={() => deleteAuthor(id)} className={styles["delete-button"]}>
          Delete
        </button>
        <button onClick={() => router.push(`/authors/${id}`)}>Details</button>
      </div>
    </div>
  );
};

export default AuthorCard;
