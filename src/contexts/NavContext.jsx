import { useState, useReducer, useContext, createContext } from "react";

export const NavContext = createContext();

export const NavContextValue = () => {
  return useContext(NavContext);
};

export const NavProvider = ({ children }) => {
  //variables
  const [state, dispatch] = useReducer((state, action) => {
    if (action === "up") {
      return state + 1;
    } else {
      return 1;
    }
  }, 1);

  return (
    <NavContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
