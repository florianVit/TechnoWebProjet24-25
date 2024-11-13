"use client";

import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import Header from '../components/Header';
import AuthorForm from './AuthorForm';
import SearchBar from './SearchBar';
import styles from '../styles/Authors.module.css';

interface Author {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
}

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editAuthorId, setEditAuthorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = () => {
    fetch('http://localhost:3001/authors/select-all/find')
      .then(response => response.json())
      .then(data => setAuthors(data))
      .catch(error => console.error('Error fetching authors:', error));
  };

  const deleteAuthor = (id: string) => {
    fetch(`http://localhost:3001/authors/by-id/delete/${id}`, { method: 'DELETE' })
      .then(() => setAuthors(prevAuthors => prevAuthors.filter(author => author.id !== id)))
      .catch(error => console.error('Error deleting author:', error));
  };

  const filteredAuthors = authors.filter(author =>
    author.nom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <h2 className={styles["authors-list-title"]}>Authors Page</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className={styles["authors-container"]}>
        <div className={styles["authors-list"]}>
          {filteredAuthors.map(author => (
            <AuthorCard
              key={author.id}
              {...author}
              deleteAuthor={deleteAuthor}
              triggerEdit={() => {
                setIsEditing(true);
                setEditAuthorId(author.id);
              }}
            />
          ))}
        </div>

        <AuthorForm
          fetchAuthors={fetchAuthors}
          isEditing={isEditing}
          editAuthorId={editAuthorId}
          setIsEditing={setIsEditing}
          setEditAuthorId={setEditAuthorId}
        />
      </div>
    </div>
  );
}
