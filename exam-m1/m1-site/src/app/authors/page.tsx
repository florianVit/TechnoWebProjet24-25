// Authors.tsx
"use client";

import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/Author/AuthorCard';
import Header from '../components/Header';
import AuthorForm from '../components/Author/AuthorForm';
import SearchBar from '../components/Author/SearchBar';
import styles from '../styles/Authors/Authors.module.css';

interface Author {
  id: string;
  nom: string;
  photo: string;
  nbr_livres_ecrits: number;
  moyenne_avis: number;
}

type SortCriteria = 'name' | 'books' | 'rating';

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editAuthorId, setEditAuthorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>('name');
  const [isAscending, setIsAscending] = useState(true);  // New state for sort order

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

  const filteredAuthors = authors
    .filter(author =>
      author.nom.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const order = isAscending ? 1 : -1;
      if (sortCriteria === 'name') {
        return a.nom.localeCompare(b.nom) * order;
      } else if (sortCriteria === 'books') {
        return (b.nbr_livres_ecrits - a.nbr_livres_ecrits) * order;
      } else if (sortCriteria === 'rating') {
        return (b.moyenne_avis - a.moyenne_avis) * order;
      }
      return 0;
    });

  return (
    <div>
      <Header />
      <h2 className={styles["authors-list-title"]}>Authors Page</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Sort Dropdown and Order Toggle */}
      <div className={styles["sort-container"]}>
        <label>Sort By: </label>
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value as SortCriteria)}
          className={styles["sort-select"]}
        >
          <option value="name">Name</option>
          <option value="books">Number of Books</option>
          <option value="rating">Average Rating</option>
        </select>

        <button
          onClick={() => setIsAscending(!isAscending)}
          className={styles["sort-order-toggle"]}
        >
          {isAscending ? 'Ascending' : 'Descending'}
        </button>
      </div>

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
