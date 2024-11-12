"use client";

import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import styles from '../styles/Authors.module.css';
import Header from '../components/Header';

interface Author {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
}

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [nom, setNom] = useState('');
  const [photo, setPhoto] = useState('');
  const [nbrLivresEcrits, setNbrLivresEcrits] = useState(0);
  const [moyenneAvis, setMoyenneAvis] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editAuthorId, setEditAuthorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  // Fetch the authors from the server
  useEffect(() => {
    fetch('http://localhost:3001/authors/select-all/find')
      .then(response => response.json())
      .then(data => setAuthors(data))
      .catch(error => console.error('Error fetching authors:', error));
  }, []);

  // Function to add a new author
  const handleAddAuthor = (event: React.FormEvent) => {
    event.preventDefault();

    const newAuthor = {
      nom,
      photo,
      nbr_livres_ecrits: nbrLivresEcrits,
      moyenne_avis: moyenneAvis,
    };

    // Add author to the backend
    fetch('http://localhost:3001/authors/create-author', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAuthor),
    })
      .then(response => response.json())
      .then(() => {
        // Fetch updated list of authors after adding the new author
        fetch('http://localhost:3001/authors/select-all/find')
          .then(response => response.json())
          .then(data => {
            setAuthors(data);  // Update the authors list in the state
          })
          .catch(error => console.error('Error fetching updated authors:', error));

        // Reset form fields
        setNom('');
        setPhoto('');
        setNbrLivresEcrits(0);
        setMoyenneAvis(0);
      })
      .catch(error => console.error('Error adding author:', error));
  };

  // Function to delete an author
  const deleteAuthor = (id: string) => {
    fetch(`http://localhost:3001/authors/by-id/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setAuthors(prevAuthors => prevAuthors.filter(author => author.id !== id));
      })
      .catch(error => console.error('Error deleting author:', error));
  };

  // Function to handle author editing
  const handleEditAuthor = (event: React.FormEvent) => {
    event.preventDefault();

    if (editAuthorId) {
      const updatedAuthor = {
        nom,
        photo,
        nbr_livres_ecrits: nbrLivresEcrits,
        moyenne_avis: moyenneAvis,
      };

      // Update author in the backend
      fetch(`http://localhost:3001/authors/by-id/update/${editAuthorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAuthor),
      })
        .then(response => response.json())
        .then(() => {
          // Fetch updated list of authors after editing the existing author
          fetch('http://localhost:3001/authors/select-all/find')
            .then(response => response.json())
            .then(data => {
              setAuthors(data);  // Update the authors list in the state
            })
            .catch(error => console.error('Error fetching updated authors:', error));

          // Reset form fields and exit edit mode
          setNom('');
          setPhoto('');
          setNbrLivresEcrits(0);
          setMoyenneAvis(0);
          setIsEditing(false);
          setEditAuthorId(null);
        })
        .catch(error => console.error('Error updating author:', error));
    }
  };

  // Filter authors based on the search query
  const filteredAuthors = authors.filter(author => 
    author.nom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
  
      <h2 className={styles["authors-list-title"]}>Authors Page</h2>

      {/* Search input */}
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search authors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles["search-input"]}
        />
      </div>
  
      {/* Container for both the authors list and the fixed form */}
      <div className={styles["authors-container"]}>
        {/* Authors list */}
        <div className={styles["authors-list"]}>
          {filteredAuthors.map(author => (
            <AuthorCard
              key={author.id}
              id={author.id}
              nom={author.nom}
              photo={author.photo}
              nbr_livres_ecrits={author.nbr_livres_ecrits}
              moyenne_avis={author.moyenne_avis}
              deleteAuthor={deleteAuthor}
              className={styles["author-card"]}
              triggerEdit={(author) => {
                setIsEditing(true);
                setEditAuthorId(author.id);
                setNom(author.nom);
                setPhoto(author.photo);
                setNbrLivresEcrits(author.nbr_livres_ecrits);
                setMoyenneAvis(author.moyenne_avis);
              }} 
            />
          ))}
        </div>
  
        {/* Add or Edit Author Form */}
        <form onSubmit={isEditing ? handleEditAuthor : handleAddAuthor} className={styles["add-author-form"]}>
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

      </div>
    </div>
  );
}
