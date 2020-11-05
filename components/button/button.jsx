import * as React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={() => onClick()}>
      {children}
      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 45px;
          padding: 0 22px;
          background-color: transparent;
          color: #4c5262;
          border: 2px solid #4c5262;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>
    </button>
  );
};
