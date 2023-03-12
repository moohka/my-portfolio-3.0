import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main-page" id="notfound-page">
      <div className="notfound-text-container">
        <h1>404 | Page Not Found</h1>
        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
