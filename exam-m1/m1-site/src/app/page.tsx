import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Book App</h2>
      <p>Select a page:</p>
      <ul>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/authors">Authors</Link>
        </li>
      </ul>
    </div>
  );
}
