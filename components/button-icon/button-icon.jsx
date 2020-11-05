import * as React from 'react';

export const ButtonIcon = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #4c5262;
          border-radius: 11px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
