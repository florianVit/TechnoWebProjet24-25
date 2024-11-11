'use client';
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { BookModel } from "../models/BookModel";
import { BookCard } from "../components/BookCard";
import { SearchBarBook } from "../components/SearchBarBook";
import { SortBarBook } from "../components/SortBarBook";
import { ModalCreateBook } from "../components/ModalCreateBook";

export default function Books() {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortCriteria, setSortCriteria] = useState<string>('title');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Récupère les livres depuis l'API
  const loadBooks = () => {
    /*
    axios.get<BookModel[]>('http://localhost:3001/books').then((response) => {
      setBooks(response.data)
    }).catch((error) => {
      console.error(error)
    })
    */

    // Liste temporaire de livres en attendant l'API
    const exampleBooks: BookModel[] = [
      { id: 1, title: "Book One", publicationDate: 2021, authorId: 1, note: 4.5, commentaire: "Great book!", prix: 19.99, description: "Description for book one" },
      { id: 2, title: "Book Two", publicationDate: 2020, authorId: 2, note: 4.0, commentaire: "Very interesting.", prix: 15.99, description: "Description for book two" },
      { id: 3, title: "Book Three", publicationDate: 2019, authorId: 3, note: 3.5, commentaire: "Good read.", prix: 12.99, description: "Description for book three" },
      { id: 4, title: "Mystery of the Old House", publicationDate: 2018, authorId: 4, note: 4.8, commentaire: "Thrilling and suspenseful.", prix: 22.99, description: "A mystery novel set in an old house." },
      { id: 5, title: "Adventures in Space", publicationDate: 2022, authorId: 5, note: 4.2, commentaire: "Exciting space adventure.", prix: 18.99, description: "A sci-fi adventure through space." },
      { id: 6, title: "Cooking with Love", publicationDate: 2017, authorId: 6, note: 4.7, commentaire: "Delicious recipes.", prix: 25.99, description: "A cookbook filled with recipes made with love." },
      { id: 7, title: "History of Ancient Civilizations", publicationDate: 2016, authorId: 7, note: 4.3, commentaire: "Very informative.", prix: 30.99, description: "A detailed history of ancient civilizations." },
      { id: 8, title: "The Art of Painting", publicationDate: 2015, authorId: 8, note: 4.6, commentaire: "Inspiring art techniques.", prix: 28.99, description: "A guide to painting techniques and styles." },
      { id: 9, title: "Journey to the Unknown", publicationDate: 2023, authorId: 9, note: 4.9, commentaire: "Captivating and mysterious.", prix: 24.99, description: "A journey into unknown territories." },
      { id: 10, title: "The Science of Happiness", publicationDate: 2014, authorId: 10, note: 4.4, commentaire: "Insightful and uplifting.", prix: 20.99, description: "Exploring the science behind happiness." }
    ];
    setBooks(exampleBooks);
  }

  // on charge les livres au chargement de la page
  useEffect(() => {
    loadBooks();
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

  const onCreate = (title: string, publicationDate: string, author: string) => {
    // Création temporaires de livres en attendant l'API
    const newBook: BookModel = {
      id: books.length + 1,
      title,
      publicationDate: new Date(publicationDate).getFullYear(),
      authorId: parseInt(author),
      note: 0,
      commentaire: "",
      prix: 0,
      description: ""
    };
    setBooks([...books, newBook]);
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
      return sortOrder === 'asc' ? a.publicationDate - b.publicationDate : b.publicationDate - a.publicationDate;
    } else if (sortCriteria === 'note') {
      return sortOrder === 'asc' ? a.note - b.note : b.note - a.note;
    }
    return 0;
  });

  return (
    <div>
      <h2>Books Page</h2>
      <button onClick={() => setIsModalOpen(true)}>Create New Book</button>
      <ModalCreateBook 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreate={onCreate} 
      /><br/>
      <SearchBarBook searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <SortBarBook 
        sortCriteria={sortCriteria} 
        sortOrder={sortOrder} 
        onSortCriteriaChange={handleSortCriteriaChange} 
        onSortOrderChange={handleSortOrderChange} 
      />
      {sortedBooks.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
}