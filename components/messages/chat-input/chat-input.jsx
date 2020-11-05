import * as React from 'react';
import { IoIosAttach } from 'react-icons/io';
import { RiSendPlaneFill } from 'react-icons/ri';

export const ChatInput = ({ value, setValue, sendMessage }) => {
  return (
    <div className="container">
      <div className="icon-container">
        <IoIosAttach size="25px" />
      </div>
      <input
        type="text"
        value={value}
        placeholder="Type something..."
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="icon-container" onClick={() => sendMessage()}>
        <RiSendPlaneFill size="25px" color="#4C5262" />
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-column-gap: 20px;
          width: 100%;
          align-items: center;

          height: 72px;
          background: #ffffff;
          border: 1px solid #e1e1e1;
          border-radius: 8px;
          padding: 15px;
        }
        input {
          border: none;
          height: 100%;
          font-size: 16px;
          color: #4c5262;
        }
        input:focus {
          outline: none;
        }
        .icon-container {
          cursor: pointer;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
