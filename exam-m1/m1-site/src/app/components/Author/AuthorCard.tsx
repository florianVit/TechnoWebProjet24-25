import React from 'react';
import styles from '../../styles/Authors/Authors.module.css';
import { useRouter } from "next/navigation";

interface AuthorCardProps {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
  biographie: string;
  deleteAuthor: (id: string) => void;
  triggerEdit: () => void;
}

export default function AuthorCard({
  id,
  nom,
  photo,
  nbr_livres_ecrits,
  moyenne_avis,
  biographie,
  deleteAuthor,
  triggerEdit
}: AuthorCardProps) {
  const router = useRouter();

  return (
    <div className={styles["author-card"]}>
      <img src={photo} alt={nom} className={styles["author-photo"]} />
      <h3>{nom}</h3>
      <p>Books Written: {nbr_livres_ecrits}</p>
      <p className={styles["author-biography"]}>{biographie}</p>

      <div className={styles["author-buttons"]}>
        <button onClick={() => router.push(`/authors/${id}`)} className={styles["details-button"]}>
          Details
        </button>

        <button onClick={() => deleteAuthor(id)} className={styles["delete-button"]}>
          Delete
        </button>

        <button onClick={triggerEdit} className={styles["edit-button"]}>
          Edit
        </button>
      </div>
    </div>
  );
}
