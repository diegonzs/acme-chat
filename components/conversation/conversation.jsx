import * as React from 'react';
import { useSelectChat } from 'hooks/useSelectChat';
import { Messages } from 'components/messages';

export const Conversation = () => {
  const { selectChat } = useSelectChat();
  return (
    <div className="container">
      {selectChat ? (
        <Messages />
      ) : (
        <div className="empty">
          <h2>Select a conversation</h2>
          <p>
            Start by selecting a conversation or searching for someone specific
          </p>
        </div>
      )}
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f8f9fc;
        }
        .empty {
          max-width: 360px;
        }
        h2 {
          font-size: 32px;
          color: #4c5262;
          text-align: center;
          margin-bottom: 24px;
        }
        p {
          text-align: center;
          font-size: 20px;
          color: #5c606e;
          margin: 0;
        }
      `}</style>
    </div>
  );
};
