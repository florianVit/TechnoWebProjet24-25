import { FC, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string, publicationDate: string, author: string) => void;
};

export const ModalCreateBook: FC<Props> = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [author, setAuthor] = useState("");

const handleSubmit = () => {
    onCreate(title, publicationDate, author);
    onClose();
    setTitle("");
    setPublicationDate("");
    setAuthor("");
};

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create a new book</h2>
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
        <button onClick={handleSubmit}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};