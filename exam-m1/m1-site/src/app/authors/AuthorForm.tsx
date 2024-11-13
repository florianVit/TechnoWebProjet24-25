import React, { useState, useEffect } from 'react';
import styles from '../styles/Authors.module.css';

interface AuthorFormProps {
  fetchAuthors: () => void;
  isEditing: boolean;
  editAuthorId: string | null;
  setIsEditing: (value: boolean) => void;
  setEditAuthorId: (value: string | null) => void;
}

export default function AuthorForm({
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

    const url = isEditing
      ? `http://localhost:3001/authors/by-id/update/${editAuthorId}`
      : 'http://localhost:3001/authors/create-author';

    const method = isEditing ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authorData),
    })
      .then(response => response.json())
      .then(() => {
        fetchAuthors();
        resetForm();
      })
      .catch(error => console.error('Error submitting author data:', error));
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
      // Fetch and prefill data for editing
      // Example fetching logic, you would replace this with the actual data fetching code
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
        
        <label htmlFor="nbrLivresEcrits" className={styles["form-label"]}>Number of Books Written</label>
        <input
        type="number"
        id="nbrLivresEcrits"
        placeholder="Enter the number of books written"
        value={nbrLivresEcrits}
        onChange={(e) => setNbrLivresEcrits(Number(e.target.value))}
        required
        className={styles["form-input"]}
        />
        
        <label htmlFor="moyenneAvis" className={styles["form-label"]}>Average Rating</label>
        <input
        type="number"
        id="moyenneAvis"
        placeholder="Enter the author's average rating"
        value={moyenneAvis}
        onChange={(e) => setMoyenneAvis(Number(e.target.value))}
        step="0.1"
        required
        className={styles["form-input"]}
        />
        
        <button
        type="submit"
        className={styles["form-button"]}
        >
        {isEditing ? 'Edit Author' : 'Add Author'}
        </button>
    </form>
);
}