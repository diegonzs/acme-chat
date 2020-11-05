import { createContext } from "react";

export const FilterContext = createContext({
  filterValue: null,
  setFilterValue: null,
});
