'use client'
import { FC, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BookModel } from "../../models/BookModel";
import BookCardDetail from "../../components/Book/BookCardDetail";
import { Modal } from "../../components/Book/Modal";
import { Button } from "../../components/Book/Button";

const BookDetailsPage: FC = () => {
    const { id } = useParams();
    const [book, setBook] = useState<BookModel>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const loadBook = () => {
        fetch(`http://localhost:3001/books/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBook(data);
            }
        );
    }

    const handleDelete = () => {
        fetch(`http://localhost:3001/books/${id}`, { method: 'DELETE' })
            .then(() => {
                router.push('/books');
            });
    };

    useEffect(() => {
        loadBook();
    }, []);

    return (
        <>
            <h1>Book Details</h1>
            {book ? (
                <BookCardDetail book={book} />
            ) : (
                <p>Loading...</p>
            )}
            <Button onClick={() => setIsModalOpen(true)}>Supprimer</Button>
            <Modal
                isOpen={isModalOpen}
                title="Confirmation de suppression"
                onCancel={() => setIsModalOpen(false)}
                onClose={() => setIsModalOpen(false)}
                onOk={handleDelete}
            >
                <p>Êtes-vous sûr de vouloir supprimer ce livre ?</p>
            </Modal>
        </>
    );
};

export default BookDetailsPage;