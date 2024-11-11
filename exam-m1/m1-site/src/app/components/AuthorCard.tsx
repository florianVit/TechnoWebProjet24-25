import React from 'react';
import styles from '../styles/Authors.module.css';

interface AuthorProps {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
}

export default function AuthorCard({ id, nom, photo, nbr_livres_ecrits, moyenne_avis }: AuthorProps) {
  return (
    <div className={styles["author-card"]}>
      <img src={photo} alt={nom} />
      <h3>{nom}</h3>
      <p className={styles["books-count"]}>Books Written: {nbr_livres_ecrits}</p>
      <p className={styles["rating"]}>Average Rating: {moyenne_avis}</p>
    </div>
  );
}
