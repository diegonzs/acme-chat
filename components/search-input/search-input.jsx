import * as React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from 'hooks';

export const SearchInput = () => {
  const { searchValue, setSearchValue } = useSearch();
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search for a new chat..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search-input"
        />
        <div className="search-icon">
          <FaSearch color="#92949D" size="18px" />
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
        }
        .search-input {
          padding: 13px;
          padding-left: 42px;
          border: 2px solid #dcdde0;
          border-radius: 10px;
          width: 100%;
          color: #92949d;
        }
        .search-icon {
          position: absolute;
          left: 18px;
          top: calc(50% - 0.5em);
        }
      `}</style>
    </>
  );
};
