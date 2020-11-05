import { useContext } from "react";
import { ChatsContext } from "context";

export const useChats = () => {
  return useContext(ChatsContext);
};
