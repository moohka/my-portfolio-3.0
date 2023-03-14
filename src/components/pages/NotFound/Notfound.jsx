import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main-page" id="notfound-page">
      <div className="notfound-text-container">
        <span className="notfound-text">
          <span className="notfound-code">404</span>
          <span className="notfound-message"> | Page Not Found</span>
        </span>

        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
