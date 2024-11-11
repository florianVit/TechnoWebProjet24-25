'use client';
import axios from "axios";
import { useState, useEffect } from "react";
import { BookModel } from "../models/BookModel";
import { BookCard } from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState<BookModel[]>([])

  // Récupère les livres depuis l'API
  const loadBooks = () => {
    axios.get<BookModel[]>('http://localhost:3001/books').then((response) => {
      console.log(response.data)
      setBooks(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  // on charge les livres au chargement de la page
  useEffect(() => {
    loadBooks()
  }, [])

  return (
    <div>
      <h2>Books Page</h2>

      {books.map((book) => <BookCard book={book} />)}
    </div>
  );
}
