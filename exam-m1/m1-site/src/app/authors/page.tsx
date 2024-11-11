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

  useEffect(() => {
    fetch('http://localhost:3001/authors/select-all/find')
      .then(response => response.json())
      .then(data => setAuthors(data))
      .catch(error => console.error('Error fetching authors:', error));
  }, []);

  return (
    <div>
      <Header />
      <h2>Authors Page</h2>
      <div className={styles["authors-list"]}>
        {authors.map(author => (
          <AuthorCard
            key={author.id}
            id={author.id}
            nom={author.nom}
            photo={author.photo}
            nbr_livres_ecrits={author.nbr_livres_ecrits}
            moyenne_avis={author.moyenne_avis}
          />
        ))}
      </div>
    </div>
  );
}
