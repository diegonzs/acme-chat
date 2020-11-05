import { Avatar } from 'components/avatar';
import { useChats } from 'hooks';
import { useSelectChat } from 'hooks/useSelectChat';
import * as React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

export const ChatElem = ({ chat }) => {
  const { toggleFavoriteChat } = useChats();
  const { selectChat, setSelectChat } = useSelectChat();
  const isSelected = selectChat?.id === chat.id;
  return (
    <li onClick={() => setSelectChat(chat)}>
      {/* <div className="line"></div> */}
      <div className="avatar-container">
        <Avatar />
      </div>
      <div className="content">
        <h4>
          {chat.firstName} {chat.lastName}
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod...</p>
      </div>
      <div className="data">
        <span className="time">1h</span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleFavoriteChat(chat.id);
          }}
          className="star-container"
        >
          {chat.isFavorite ? (
            <FaStar size="20px" color="#4C5262" />
          ) : (
            <FaRegStar size="20px" color="#DADBDE" />
          )}
        </div>
      </div>
      <style jsx>{`
        li {
          width: 100%;
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-column-gap: 9px;
          padding-left: 20px;
          cursor: pointer;
          position: relative;
          background-color: ${isSelected ? '#F8F8F8' : 'transparent'};
          grid-auto-rows: auto;
          grid-auto-flow: row;
        }
        li:after {
          content: '';
          height: 1px;
          grid-column: 2 / -1;
          width: 100%;
          background-color: #e9e9eb;
          position: absolute;
          top: 0;
          right: 0;
        }
        li:before {
          content: '';
          background-color: #c4c4c4;
          height: 100%;
          width: 2px;
          opacity: ${isSelected ? '1' : '0'};
          position: absolute;
        }
        li:first-child:after {
          height: 0;
        }
        .avatar-container {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .content {
          display: flex;
          width: 100%;
          padding: 10px 0;
          flex-direction: column;
          justify-content: center;
        }
        .content h4 {
          margin: 0;
          margin-bottom: 5px;
          color: #202537;
          font-size: 14px;
        }
        .content p {
          margin: 0;
          color: #90939b;
          font-size: 12px;
          line-height: 1;
        }
        .data {
          display: grid;
          grid-row-gap: 8px;
          height: 100%;
          align-items: center;
          padding: 10px 0;
          padding-right: 20px;
        }
        .time {
          align-self: start;
          font-size: 12px;
          color: #93959e;
          text-align: center;
        }
        .star-container {
          cursor: pointer;
        }
      `}</style>
    </li>
  );
};
