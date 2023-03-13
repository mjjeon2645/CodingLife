import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <button type="button" onClick={handleClickLogout}>
            Log out
          </button>
          {/* <li>
            <NavLink to="/logout">Log out</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
