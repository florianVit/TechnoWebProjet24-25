import React from 'react';
import styles from '../styles/Authors.module.css';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        placeholder="Search authors..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className={styles["search-input"]}
      />
    </div>
  );
}
