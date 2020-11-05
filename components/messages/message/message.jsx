import { Avatar } from 'components/avatar';
import * as React from 'react';

export const Message = ({ text, isMine }) => {
  return (
    <div className="message-container">
      <Avatar isSmall backgroundColor="#C4C4C4" />
      <div className="content">
        <div className="message-box">{text}</div>
        <span className="time">9h ago</span>
      </div>
      <style jsx>{`
        .message-container {
          display: flex;
          flex-direction: ${isMine ? 'row-reverse' : 'row'};
          margin-bottom: 16px;
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: ${isMine ? 'flex-end' : 'flex-start'};
          margin-right: ${isMine ? '8px' : '0'};
          margin-left: ${isMine ? '0' : '8px'};
        }
        .message-box {
          padding: 14px 16px;
          background-color: ${isMine ? '#202537' : '#E9E9EB'};
          color: ${isMine ? '#FFFFFF' : '#202537'};
          margin-bottom: 4px;
          border-radius: 8px;
          font-size: 16px;
          max-width: 723px;
        }
        .time {
          font-size: 10px;
          color: #92949d;
        }
      `}</style>
    </div>
  );
};
