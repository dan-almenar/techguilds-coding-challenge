"use client";
import { useState } from 'react';
import styles from './searchbar.module.css';

const SearchBar: React.FunctionComponent = (): React.JSX.Element => {
	const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch: React.EventHandler<React.SyntheticEvent> = (e: React.SyntheticEvent): void => {
    console.log(searchTerm);
  };

  return (
    <div className={styles.container}>
      <input
		className={styles.searchbar}
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

