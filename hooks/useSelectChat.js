import { useContext } from "react";
import { SelectChatContext } from "context";

export const useSelectChat = () => {
  return useContext(SelectChatContext);
};
