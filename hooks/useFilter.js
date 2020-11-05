import { useContext } from "react";
import { FilterContext } from "context";

export const useFilter = () => {
  return useContext(FilterContext);
};
