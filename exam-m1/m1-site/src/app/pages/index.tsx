import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      <h2>Welcome to the Book App</h2>
      <p>Select a page:</p>
      <ul>
        <li>
          <Link href="/books/index.tsx">Books</Link>
        </li>
        <li>
          <Link href="/authors/index.tsx">Authors</Link>
        </li>
      </ul>
    </div>
  );
}
