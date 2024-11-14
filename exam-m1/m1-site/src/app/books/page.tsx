'use client';
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { BookModel } from "../models/BookModel";
import { BookCard } from "../components/Book/BookCard";
import { SearchBarBook } from "../components/Book/SearchBar";
import { SortBarBook } from "../components/Book/SortBarBook";
//import { ModalCreateBook } from "../components/ModalCreateBook";
import { Modal } from "../components/Book/Modal";
import { Button } from "../components/Book/Button";

export default function Books() {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [authors, setAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortCriteria, setSortCriteria] = useState<string>('title');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const getAuthorNameById = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/authors/by-id/find/${id}`);
      return response.data.nom;
    } catch (error) {
      console.error(error);
    }
  };

  // Récupère les livres depuis l'API
  const loadBooks = async () => {
    try {
      const response = await axios.get<BookModel[]>('http://localhost:3001/books');
      
      const booksWithAuthorNames = await Promise.all(response.data.map(async (book) => {
        
        const authorName = await getAuthorNameById(book.authorId.toString());
        return { ...book, authorName };
      }));
      console.log("books ", booksWithAuthorNames);
      setBooks(booksWithAuthorNames);
    } catch (error) {
      console.error(error);
    }
  };

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

  const createAuthor = async (name: string) => {
    try {
      const response = await axios.post('http://localhost:3001/authors/create-author', {
        nom: name,
        photo: '',
        nbr_livres_ecrits: 0,
        moyenne_avis: 0
      });
      //return response.data.id;
    } catch (error) {
      console.error(error);
    }
  };

  const getAuthorIdByName = async (name: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/authors/by-name/find/${name}`);
      if (response.data.length > 0) {
        return response.data[0].id
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  };

  const onCreate = async (title: string, publicationDate: string, authorName: string) => {
    let authorId = await getAuthorIdByName(authorName);
    if (!authorId) {
      await createAuthor(authorName);
      authorId = await getAuthorIdByName(authorName);
    }

    if (!authorId) {
      console.error("Author ID is undefined");
      return;
    }

    axios.post('http://localhost:3001/books', {
      title,
      publicationDate,
      authorId: authorId.toString()
    }).then(() => {
      loadBooks();
    }).catch((error) => {
      console.error(error);
    });

    // Création temporaires de livres en attendant l'API
    /*
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
    setBooks([...books, newBook]);*/
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
      <h2>Books Page</h2>
      <Button onClick={() => setIsModalOpen(true)}>Créer un livre</Button>
      <Modal
        isOpen={isModalOpen}
        title="Créer un nouveau livre"
        onCancel={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
        onOk={() => onCreate(title, publicationDate, author)}
      >
        <div>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Publication Date:
          <input type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        </div>
      </Modal>

      <br />
      <SearchBarBook searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <SortBarBook
        sortCriteria={sortCriteria}
        sortOrder={sortOrder}
        onSortCriteriaChange={handleSortCriteriaChange}
        onSortOrderChange={handleSortOrderChange}
      />
      {sortedBooks.map((book) => <BookCard key={book.id} book={book} authorName={book.authorName} />)}
    </div>
  );
}