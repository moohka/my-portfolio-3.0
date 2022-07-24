import { useContext } from "react";
import Navbar from "./interfaces/Navbar";
import { NavContext } from "./App";

const Header = () => {
  const navRefs = useContext(NavContext);

  return (
    <>
      <div className="Header" ref={navRefs[0]}>
        <h1 className="header-title">
          <a className="refresh" href="http://localhost:3000/">
            Moohyun Kang
          </a>
        </h1>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
