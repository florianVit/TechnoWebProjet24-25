import Link from 'next/link';
import './styles/App.css';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
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
