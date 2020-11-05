import * as React from 'react';
import data from 'data/MOCK_DATA';
import {
  ChatsContext,
  FilterContext,
  SearchContext,
  SelectChatContext,
} from 'context';
import { OptionsContainer } from 'components/options-container';
import { Conversation } from 'components/conversation';
import { ChatElem } from 'components/chat-elem';

const Home = () => {
  const [chats, setChats] = React.useState(data);
  const [searchValue, setSearchValue] = React.useState('');
  const [filterValue, setFilterValue] = React.useState('all');
  const [selectChat, setSelectChat] = React.useState(null);
  const toggleFavoriteChat = (id) => {
    if (id) {
      const updatedChats = chats.map((chat) => {
        if (chat.id === id) {
          return {
            ...chat,
            isFavorite: !chat.isFavorite,
          };
        }
        return chat;
      });
      setChats(updatedChats);
    }
  };
  let filteredChats = chats;
  if (!!searchValue) {
    filteredChats = chats.filter((elem) =>
      `${elem.firstName} ${elem.lastName}`
        .toLocaleLowerCase()
        .includes(searchValue)
    );
  }
  if (filterValue !== 'all') {
    filteredChats = filteredChats.filter((elem) => elem.isFavorite);
  }
  return (
    <ChatsContext.Provider value={{ chats, toggleFavoriteChat }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <FilterContext.Provider value={{ filterValue, setFilterValue }}>
          <SelectChatContext.Provider value={{ selectChat, setSelectChat }}>
            <div className="main-container">
              <div className="left-container">
                <div className="options-container">
                  <OptionsContainer />
                </div>
                <ul>
                  {filteredChats.map((elem) => (
                    <ChatElem key={elem.id} chat={elem} />
                  ))}
                </ul>
              </div>
              <div className="right-container">
                <Conversation />
              </div>
              <style jsx>{`
                .main-container {
                  display: grid;
                  width: 100%;
                  grid-template-columns: 364px 1fr;
                  height: 100vh;
                  overflow: hidden;
                }
                .left-container {
                  display: grid;
                  grid-template-rows: 148px 1fr;
                  height: 100%;
                  border: 1px solid #dcdde0;
                  border-top: none;
                  border-left: none;
                }
                .right-container {
                  width: 100%;
                  height: 100vh;
                }
                .options-container {
                  display: flex;
                  align-items: flex-start;
                  border-bottom: 1px solid #e3e4e7;
                }
                ul {
                  overflow-y: scroll;
                  height: calc(100vh - 119px);
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                }
              `}</style>
              <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
                * {
                  margin: 0;
                  padding: 0;
                }
                *,
                *::before,
                *::after {
                  box-sizing: inherit;
                }
                html {
                  box-sizing: border-box;
                }
                body {
                  font-family: 'Poppins', 'sans-serif';
                  font-weight: 400;
                  line-height: 1.6;
                  overflow-x: hidden;
                  margin: 0;
                }
                a {
                  text-decoration: none;
                  color: inherit;
                }
                button {
                  font-family: 'Poppins', 'sans-serif';
                }
              `}</style>
            </div>
          </SelectChatContext.Provider>
        </FilterContext.Provider>
      </SearchContext.Provider>
    </ChatsContext.Provider>
  );
};

export default Home;
