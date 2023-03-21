import {
  useEffect,
  useReducer,
  useContext,
  createContext,
  useRef,
} from "react";

export const NavContext = createContext();

export const NavContextValue = () => {
  return useContext(NavContext);
};

export const NavProvider = ({ children }) => {
  //useRef
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  //useReducer
  const [state, dispatch] = useReducer(reducer, {
    currentSection: "first",
  });

  function reducer(state, action) {
    switch (action.type) {
      //scroll
      case "DOWN":
        if (state.currentSection === "first") {
          return { currentSection: "second" };
        } else if (state.currentSection === "second") {
          return { currentSection: "third" };
        } else if (state.currentSection === "third") {
          return { currentSection: "fourth" };
        } else {
          return { currentSection: "fourth" };
        }
      case "UP":
        if (state.currentSection === "first") {
          return { currentSection: "first" };
        } else if (state.currentSection === "second") {
          return { currentSection: "first" };
        } else if (state.currentSection === "third") {
          return { currentSection: "second" };
        } else {
          return { currentSection: "third" };
        }

      //navigation
      case "FIRST":
        return { currentSection: "first" };
      case "SECOND":
        return { currentSection: "second" };
      case "THIRD":
        return { currentSection: "third" };
      case "FOURTH":
        return { currentSection: "fourth" };

      //default
      default:
        return { currentSection: "first" };
    }
  }

  //useEffect: trigger scroll when state change
  useEffect(() => {
    switch (state.currentSection) {
      case "first":
        document.documentElement.style.setProperty("--section", `0 -0vh`);
        break;
      case "second":
        document.documentElement.style.setProperty("--section", `0 -100vh`);
        break;
      case "third":
        document.documentElement.style.setProperty("--section", `0 -200vh`);
        break;
      case "fourth":
        document.documentElement.style.setProperty("--section", `0 -300vh`);
        break;
      default:
        break;
    }
  }, [state]);

  //useEffect: addEventListener on window
  useEffect(() => {
    let key = true;

    function sectionScroll(e) {
      if (key) {
        key = false;

        if (e.deltaY < 0) {
          dispatch({ type: "UP" });
        } else {
          dispatch({ type: "DOWN" });
        }

        setTimeout(() => {
          key = true;
        }, 1300);
      }
    }
    window.addEventListener("wheel", sectionScroll);
    return () => {
      window.removeEventListener("wheel", sectionScroll);
    };
  }, []);

  return (
    <NavContext.Provider
      value={{
        state,
        dispatch,
        heroRef,
        aboutRef,
        projectRef,
        contactRef,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
