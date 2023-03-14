import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <h1 className="header-title">
        <a className="header-anchor" href="http://www.moohyunkang.com">
          Moohyun Kang
        </a>
      </h1>
      {pathname !== "/" ? null : <Nav />}
    </header>
  );
};

export default Header;
