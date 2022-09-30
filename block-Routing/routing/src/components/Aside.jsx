import { Link } from 'react-router-dom';

function Aside(props) {
  return (
    <ul className="aside">
      <Link to="/">
        <li>
          <i className="fas fa-home"></i>
          Home
        </li>
      </Link>
      <Link to="/article">
        <li>
          <i className="far fa-newspaper"></i>
          Article
        </li>
      </Link>
      <Link to="people">
        <li>
          <i className="fas fa-user-friends"></i>
          People
        </li>
      </Link>
      <Link to="/contact">
        <li>
          <i class="far fa-id-card"></i>
          Contact
        </li>
      </Link>
      <Link to="help">
        <li>
          <i class="fas fa-hands-helping"></i>
          Help & Support
        </li>
      </Link>
    </ul>
  );
}

export default Aside;