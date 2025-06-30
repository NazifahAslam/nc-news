import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Our News</h1>

      <div className="navbar">
        <Link to="/" className="nav-components">
          Home
        </Link>
        <Link to="/articles" className="nav-components">
          Articles
        </Link>
        <Link to="/users" className="nav-components">
          Users
        </Link>
        <Link to="/topics" className="nav-components">
          Topics
        </Link>
      </div>
    </header>
  );
}

export default Header;
