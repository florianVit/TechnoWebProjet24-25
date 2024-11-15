import React, { useState, useEffect } from 'react';
import styles from '../../styles/Authors/Authors.module.css';

interface AuthorFormProps {
  handleCreateAuthor: (authorData: {
    nom: string;
    photo: string;
    nbr_livres_ecrits: number;
    moyenne_avis: number;
    biographie: string; // Include biographie in the author data
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
  const [biographie, setBiographie] = useState('');  // Added state for biographie

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const authorData = { nom, photo, nbr_livres_ecrits: nbrLivresEcrits, moyenne_avis: moyenneAvis, biographie };
    handleCreateAuthor(authorData);
    resetForm();
  };

  const resetForm = () => {
    setNom('');
    setPhoto('');
    setNbrLivresEcrits(0);
    setMoyenneAvis(0);
    setBiographie('');
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
          setBiographie(data.biographie); // Load biographie if editing
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

      <label htmlFor="biographie" className={styles["form-label"]}>Biography</label>
      <textarea
        id="biographie"
        placeholder="Enter the author's biography"
        value={biographie}
        onChange={(e) => setBiographie(e.target.value)}
        required
        className={styles["form-textarea"]}
      />

      <button type="submit" className={styles["form-button"]}>
        {isEditing ? 'Edit Author' : 'Add Author'}
      </button>
    </form>
  );
}
