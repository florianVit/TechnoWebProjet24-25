'use client';
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { BookModel } from "../models/BookModel";
import { BookCard } from "../components/Book/BookCard";
import { SearchBarBook } from "../components/Book/SearchBar";
import { SortBarBook } from "../components/Book/SortBarBook";
import { Modal } from "../components/Book/Modal";
import { Button } from "../components/Book/Button";
import Header from "../components/Header";
import { CreateBookForm } from "../components/Book/CreateBookForm";
import { useBookProviders } from "../providers/books";

export default function Books() {
  const [authors, setAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortCriteria, setSortCriteria] = useState<string>('title');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const { books, loadBooks, onCreate } = useBookProviders();

  // on charge les livres au chargement de la page
  useEffect(() => {
    loadBooks().catch(error => {
      console.error("Failed to load books:", error);
    });
  }, []);

  // Gère le changement de la barre de recherche
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Gère le changement de critère de tri
  const handleSortCriteriaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(event.target.value);
  };

  // Gère le changement d'ordre de tri
  const handleSortOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  // Filtre les livres en fonction du terme de recherche
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Trie les livres en fonction du critère et de l'ordre de tri
  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortCriteria === 'title') {
      return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortCriteria === 'publicationDate') {
      const dateA = new Date(a.publicationDate).getTime();
      const dateB = new Date(b.publicationDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortCriteria === 'note') {
      return sortOrder === 'asc' ? a.note - b.note : b.note - a.note;
    }
    return 0;
  });

  return (
    <div>
      <Header />
      <h2>Books Page</h2>
      <Button onClick={() => setIsModalOpen(true)}>Créer un livre</Button>
      <Modal
        isOpen={isModalOpen}
        title="Créer un nouveau livre"
        onCancel={() => {
          setIsModalOpen(false);
          setTitle("");
          setAuthor("");
          setPublicationDate("");
        }}
        onClose={() => {
          setIsModalOpen(false);
          setTitle("");
          setAuthor("");
          setPublicationDate("");
        }}
        onOk={() => {
          setIsModalOpen(false);
          setTitle("");
          setAuthor("");
          setPublicationDate("");
        }}
      >
        <CreateBookForm onCreate={onCreate} />
      </Modal>
      <br />
      <SearchBarBook searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <SortBarBook
        sortCriteria={sortCriteria}
        sortOrder={sortOrder}
        onSortCriteriaChange={handleSortCriteriaChange}
        onSortOrderChange={handleSortOrderChange}
      />
      {sortedBooks.map((book) => <BookCard key={book.id} book={book} authorName={book.authorName || 'Unknown Author'} />)}
    </div>
  );
}