import { FC, ChangeEvent } from 'react';

type Props = {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBarBook: FC<Props> = ({ searchTerm, onSearchChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Search by title" 
      value={searchTerm} 
      onChange={onSearchChange} 
    />
  );
};