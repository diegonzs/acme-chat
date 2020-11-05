import { Button } from 'components/button';
import { ButtonIcon } from 'components/button-icon/button-icon';
import { SearchInput } from 'components/search-input';
import { Select } from 'components/select';
import React from 'react';
import { FaRocketchat } from 'react-icons/fa';

export const OptionsContainer = () => {
  return (
    <div className="container">
      <div className="options">
        <SearchInput />
        <ButtonIcon>
          <FaRocketchat color="#fff" size="25px" />
        </ButtonIcon>
      </div>
      <div className="options">
        <Select />
        <Button onClick={() => null}>Follow up</Button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          padding: 18px 20px;
          background-color: #fcfdff;
        }
        .options {
          display: grid;
          grid-template-columns: 1fr auto;
          width: 100%;
          justify-content: space-between;
          grid-column-gap: 30px;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
