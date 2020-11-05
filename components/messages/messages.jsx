import { useSelectChat } from 'hooks/useSelectChat';
import * as React from 'react';
import { ChatInput } from './chat-input';
import { Message } from './message';

const possibleMessages = [
  {
    text: 'Lorem ipsum text message',
    isMine: false,
  },
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque erat id justo placerat, at mollis purus vestibulum. Maecenas nisl sapien, scelerisque sed sapien sodales, tempus ultricies enim.',
    isMine: true,
  },
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque erat id justo placerat, at mollis purus vestibulum. Maecenas nisl sapien, scelerisque sed sapien sodales, tempus ultricies enim.',
    isMine: false,
  },
  {
    text: 'Lorem ipsum text message, example long copy',
    isMine: true,
  },
  {
    text: 'Lorem ipsum text message, example long copy',
    isMine: false,
  },
  {
    text: 'Lorem ipsum text message, example long copy',
    isMine: true,
  },
  {
    text: 'Lorem ipsum text message, example long copy',
    isMine: false,
  },
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque erat id justo placerat, at mollis purus vestibulum. Maecenas nisl sapien, scelerisque sed sapien sodales, tempus ultricies enim.',
    isMine: false,
  },
];

const getMessages = () => {
  return possibleMessages.sort(() => 0.5 - Math.random()).slice(0, 8);
};

export const Messages = () => {
  const { selectChat } = useSelectChat();
  const [messages, setMessages] = React.useState(getMessages());
  const [messageValue, setMessageValue] = React.useState('');

  React.useEffect(() => {
    setMessages(getMessages());
  }, [selectChat]);

  const addMessage = () => {
    setMessageValue('');
    setMessages([{ text: messageValue, isMine: true }, ...messages]);
  };

  return (
    <div className="container">
      <div className="messages-list">
        {messages.map((msg) => (
          <Message text={msg.text} isMine={msg.isMine} />
        ))}
      </div>
      <ChatInput
        value={messageValue}
        setValue={(value) => setMessageValue(value)}
        sendMessage={() => addMessage()}
      />
      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 1fr auto;
          height: 100%;
          width: 100%;
          padding: 16px 24px;
        }
        .messages-list {
          display: flex;
          flex-direction: column-reverse;
          justify-content: flex-start;
          overflow-y: scroll;
          height: calc(100vh - 100px);
        }
      `}</style>
    </div>
  );
};
