
import axios from "axios";
import { useState } from "react";
import { BookModel } from "../models/BookModel";

export const useBookProviders = () => {
  const [books, setBooks] = useState<BookModel[]>([]);

  const getAuthorNameById = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/authors/by-id/find/${id}`);
      return response.data.nom;
    } catch (error) {
      console.error(error);
    }
  };

  const loadBooks = async () => {
    try {
      const response = await axios.get<BookModel[]>('http://localhost:3001/books');
      const booksWithAuthorNames = await Promise.all(response.data.map(async (book) => {
        const authorName = await getAuthorNameById(book.authorId.toString());
        return { ...book, authorName };
      }));
      setBooks(booksWithAuthorNames);
    } catch (error) {
      console.error(error);
    }
  };

  const createAuthor = async (name: string) => {
    try {
      await axios.post('http://localhost:3001/authors/create-author', {
        nom: name,
        photo: '',
        nbr_livres_ecrits: 0,
        moyenne_avis: 0
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getAuthorIdByName = async (name: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/authors/by-name/find/${name}`);
      if (response.data.length > 0) {
        return response.data[0].id;
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  };

  const incrementAuthorBooksCount = async (authorId: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/authors/by-id/find/${authorId}`);
      const newNbrLivresEcrits = response.data.nbr_livres_ecrits + 1;
      await axios.put(`http://localhost:3001/authors/update-author/${authorId}`, {
        nom: response.data.nom,
        photo: response.data.photo,
        nbr_livres_ecrits: newNbrLivresEcrits,
        moyenne_avis: response.data.moyenne_avis
      });
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

    incrementAuthorBooksCount(authorId);
  };

  return {
    books,
    loadBooks,
    onCreate
  };
};