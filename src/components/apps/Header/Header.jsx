import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header-title">
          <a className="header-anchor" href="http://www.moohyunkang.com">
            Moohyun Kang
          </a>
        </h1>
      </div>

      <Nav />
    </>
  );
};

export default Header;
