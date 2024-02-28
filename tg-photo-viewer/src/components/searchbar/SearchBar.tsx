"use client";
import { useState } from 'react';
import styles from './searchbar.module.css';

const SearchBar: React.FunctionComponent = (): React.JSX.Element => {
	const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch: React.EventHandler<React.SyntheticEvent> = (e: React.SyntheticEvent): void => {
	e.preventDefault();

	// redirect to search results
	location.href = `/search/${searchTerm}`;
  };

  const handleInput: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
	if (e.key === 'Enter') handleSearch(e);
  }

  return (
    <div
		className={styles.container}>
      <input
		className={styles.input}
        type="text"
        value={searchTerm}
		placeholder="Search..."
		autoComplete="on"
		autoFocus
		maxLength={40}
        onChange={(e) => setSearchTerm(e.target.value)}
		onKeyDown={handleInput}
      />
      <button
		className={`material-icons ${styles.button}`}
		onClick={handleSearch}
	  >
		search
	  </button>
    </div>
  );
};

export default SearchBar;

