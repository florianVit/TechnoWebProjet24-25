'use client'
import { FC, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BookModel } from "../../models/BookModel";
import BookCardDetail from "../../components/Book/BookCardDetail";
import { Modal } from "../../components/Book/Modal";
import { Button } from "../../components/Book/Button";
import { Drawer, Select, MenuItem } from "@mui/material";

const BookDetailsPage: FC = () => {
    const { id } = useParams();
    const [book, setBook] = useState<BookModel>();
    const [reviews, setReviews] = useState<{ rating: number; comment: string; }[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    const router = useRouter();

    const loadBook = () => {
        fetch(`http://localhost:3001/books/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBook(data);
            }
        );
    }

    const loadReviews = () => {
        /*
        fetch(`http://localhost:3001/reviews/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
            }
        );*/

        // liste des avis temporaire
        const tempReviews = [
            { rating: 5, comment: "Excellent book!", date: new Date('2023-01-01') },
            { rating: 4, comment: "Very good read.", date: new Date('2023-01-02') },
            { rating: 3, comment: "It was okay.", date: new Date('2023-01-03') },
            { rating: 2, comment: "Not what I expected.", date: new Date('2023-01-04') },
            { rating: 1, comment: "Did not enjoy it.", date: new Date('2023-01-05') },
        ];
        setReviews(tempReviews.sort((a, b) => sortOrder === 'asc' ? a.date - b.date : b.date - a.date));
    }

    const handleDelete = () => {
        fetch(`http://localhost:3001/books/${id}`, { method: 'DELETE' })
            .then(() => {
                router.push('/books');
            });
    };

    useEffect(() => {
        loadBook();
        loadReviews();
    }, [sortOrder]);

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
            <Button onClick={() => setIsDrawerOpen(true)}>Voir les avis</Button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <div style={{ width: 250, padding: 20 }}>
                    <h2>Avis</h2>
                    <Select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="asc">Date croissante</MenuItem>
                        <MenuItem value="desc">Date décroissante</MenuItem>
                    </Select>
                    {reviews.map((review, index) => (
                        <div key={index} style={{ marginBottom: 10 }}>
                            <p>Étoiles: {review.rating}</p>
                            {review.comment && <p>Commentaire: {review.comment}</p>}
                        </div>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default BookDetailsPage;