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

interface Book {
  id: string;
  title: string;
  authorId: string;
}

type SortCriteria = 'name' | 'books' | 'rating';

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editAuthorId, setEditAuthorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>('name');
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetchAuthors();
    fetchBooks();
  }, []);

  const fetchAuthors = () => {
    fetch('http://localhost:3001/authors/select-all/find')
      .then(response => response.json())
      .then(data => setAuthors(data))
      .catch(error => console.error('Error fetching authors:', error));
  };

  const fetchBooks = () => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  };

  const handleCreateAuthor = (authorData: any) => {
    const isEdit = isEditing && editAuthorId;
    const url = isEdit
      ? `http://localhost:3001/authors/update-author/${editAuthorId}`
      : 'http://localhost:3001/authors/create-author';
  
    const method = isEdit ? 'PUT' : 'POST';
  
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authorData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json().catch(() => null);
      })
      .then(updatedAuthor => {
        if (updatedAuthor) {
          console.log(isEdit ? 'Author updated:' : 'Author created:', updatedAuthor);
          setAuthors(prevAuthors =>
            isEdit
              ? prevAuthors.map(author =>
                  author.id === editAuthorId ? updatedAuthor : author
                )
              : [...prevAuthors, updatedAuthor]
          );
        } else {
          console.log('No data returned after creation or update.');
        }
        fetchAuthors();
        setIsEditing(false);
        setEditAuthorId(null);
      })
      .catch(error => console.error('Error submitting author data:', error));
  };
  

  const deleteAuthor = (id: string) => {
    fetch(`http://localhost:3001/authors/by-id/delete/${id}`, { method: 'DELETE' })
      .then(() => setAuthors(prevAuthors => prevAuthors.filter(author => author.id !== id)))
      .catch(error => console.error('Error deleting author:', error));
  };

  const triggerEdit = (id: string) => {
    setIsEditing(true);
    setEditAuthorId(id);
  };

  const getBooksCountByAuthor = (authorId: string) => {
    return books.filter(book => book.authorId === authorId).length;
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
        return (getBooksCountByAuthor(b.id) - getBooksCountByAuthor(a.id)) * order;
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
              biographie={''} key={author.id}
              {...author}
              nbr_livres_ecrits={getBooksCountByAuthor(author.id)}
              deleteAuthor={deleteAuthor}
              triggerEdit={() => triggerEdit(author.id)}            />
          ))}
        </div>

        <AuthorForm
          handleCreateAuthor={handleCreateAuthor}
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
