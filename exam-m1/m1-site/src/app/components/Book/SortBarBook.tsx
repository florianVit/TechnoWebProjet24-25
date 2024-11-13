import {FC, ChangeEvent} from 'react';

type Props = {
  sortCriteria: string;
  sortOrder: string;
  onSortCriteriaChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSortOrderChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SortBarBook: FC<Props> = ({ sortCriteria, sortOrder, onSortCriteriaChange, onSortOrderChange }) => {
  return (
    <div>
      <label>
        Sort by:
        <select value={sortCriteria} onChange={onSortCriteriaChange}>
          <option value="title">Title</option>
          <option value="publicationDate">Publication Date</option>
          <option value="note">Note</option>
        </select>
      </label>
      <label>
        Order:
        <select value={sortOrder} onChange={onSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};