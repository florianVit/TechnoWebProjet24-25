import React, { useState, useEffect } from 'react';
import styles from '../../styles/Authors/Authors.module.css';

interface AuthorFormProps {
  handleCreateAuthor: (authorData: {
    nom: string;
    photo: string;
    nbr_livres_ecrits: number;
    moyenne_avis: number;
  }) => void;
  fetchAuthors: () => void;
  isEditing: boolean;
  editAuthorId: string | null;
  setIsEditing: (value: boolean) => void;
  setEditAuthorId: (value: string | null) => void;
}

export default function AuthorForm({
  handleCreateAuthor,
  fetchAuthors,
  isEditing,
  editAuthorId,
  setIsEditing,
  setEditAuthorId
}: AuthorFormProps) {
  const [nom, setNom] = useState('');
  const [photo, setPhoto] = useState('');
  const [nbrLivresEcrits, setNbrLivresEcrits] = useState(0);
  const [moyenneAvis, setMoyenneAvis] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const authorData = { nom, photo, nbr_livres_ecrits: nbrLivresEcrits, moyenne_avis: moyenneAvis };
    handleCreateAuthor(authorData);
    resetForm();
  };

  const resetForm = () => {
    setNom('');
    setPhoto('');
    setNbrLivresEcrits(0);
    setMoyenneAvis(0);
    setIsEditing(false);
    setEditAuthorId(null);
  };

  useEffect(() => {
    if (isEditing && editAuthorId) {
      fetch(`http://localhost:3001/authors/by-id/${editAuthorId}`)
        .then(response => response.json())
        .then(data => {
          setNom(data.nom);
          setPhoto(data.photo);
          setNbrLivresEcrits(data.nbr_livres_ecrits);
          setMoyenneAvis(data.moyenne_avis);
        })
        .catch(error => console.error('Error fetching author for edit:', error));
    }
  }, [isEditing, editAuthorId]);

  return (
    <form onSubmit={handleSubmit} className={styles["add-author-form"]}>
      <h3 className={styles["form-title"]}>{isEditing ? 'Edit Author' : 'Add a New Author'}</h3>

      <label htmlFor="nom" className={styles["form-label"]}>Author Name</label>
      <input
        type="text"
        id="nom"
        placeholder="Enter the author's name"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
        className={styles["form-input"]}
      />

      <label htmlFor="photo" className={styles["form-label"]}>Photo URL</label>
      <input
        type="text"
        id="photo"
        placeholder="Enter the URL of the author's photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
        className={styles["form-input"]}
      />

      <button type="submit" className={styles["form-button"]}>
        {isEditing ? 'Edit Author' : 'Add Author'}
      </button>
    </form>
  );
}