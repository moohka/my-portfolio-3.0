import { useRef, useContext, createContext } from "react";

export const NavContext = createContext();

export const NavContextValue = () => {
  return useContext(NavContext);
};

export const NavProvider = ({ children }) => {
  //variables
  const homePageRef = useRef();
  const aboutSectionRef = useRef();
  const contactSectionRef = useRef();
  const projectSectionRef = useRef();

  return (
    <NavContext.Provider
      value={{
        homePageRef,
        aboutSectionRef,
        contactSectionRef,
        projectSectionRef,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
