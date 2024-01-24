"use client";
import { useState } from 'react';
import styles from './searchbar.module.css';

const SearchBar: React.FunctionComponent = (): React.JSX.Element => {
	const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch: React.EventHandler<React.SyntheticEvent> = (e: React.SyntheticEvent): void => {
    // clear text input
	e.preventDefault();
	setSearchTerm('');
	// redirect to search results
	window.location.href = `/search/${searchTerm}`;
  };

  return (
    <div
		className={styles.container}>
      <input
		className={styles.input}
        type="text"
        value={searchTerm}
		placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
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

