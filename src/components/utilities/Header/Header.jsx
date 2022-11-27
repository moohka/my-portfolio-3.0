import Navbar from "../../interfaces/Navbar/Navbar";
import { NavContextValue } from "../../../contexts/NavContext";

const Header = () => {
  const { headerRef } = NavContextValue();

  return (
    <>
      <div className="header" ref={headerRef}>
        <h1 className="header-title">
          <a className="header-refresh" href="http://www.moohyunkang.com">
            Moohyun Kang
          </a>
        </h1>
      </div>

      <Navbar />
    </>
  );
};

export default Header;
