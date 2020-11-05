import * as React from 'react';
import { Avatar } from 'components/avatar';
import { useSelectChat } from 'hooks/useSelectChat';

export const Head = () => {
  const { selectChat } = useSelectChat();
  return (
    <div className="container">
      <Avatar />
      <h2 className="user-name">
        {selectChat ? `${selectChat.firstName} ${selectChat.lastName}` : ''}
      </h2>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          height: 100px;
          border-bottom: 1px solid black;
          width: 100%;
          padding: 0 20px;
        }
        .user-name {
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
};
