import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useFilter } from 'hooks';

export const Select = () => {
  const { filterValue, setFilterValue } = useFilter();
  return (
    <>
      <div className="select-container">
        <select
          name="filter"
          id="filter"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="all">All conversations</option>
          <option value="favorites">Favorites</option>
        </select>
        <div className="icon-container">
          <FaChevronDown size="12px" color="#92949D" />
        </div>
      </div>
      <style jsx>{`
        .select-container {
          display: flex;
          width: 100%;
          position: relative;
        }
        select {
          appearance: none;
          padding: 13px;
          border: 2px solid #dcdde0;
          border-radius: 10px;
          width: 100%;
          color: #4c5262;
        }
        .icon-container {
          display: flex;
          position: absolute;
          right: 19px;
          top: calc(50% - 6px);
        }
      `}</style>
    </>
  );
};
