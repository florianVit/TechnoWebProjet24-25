import { useState, ChangeEvent } from "react";

interface CreateBookFormProps {
  onCreate: (title: string, publicationDate: string, author: string) => void;
}

export function CreateBookForm({ onCreate }: CreateBookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const handleSubmit = () => {
    onCreate(title, publicationDate, author);
    setTitle("");
    setPublicationDate("");
    setAuthor("");
  };

  return (
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
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}
