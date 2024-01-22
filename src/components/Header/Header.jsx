import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={css.headerNav}>
        <ul className={css.headerUl}>
          <li className={css.headerLi}>
            <NavLink  to="/" className={css.navLink}>Home</NavLink>
          </li>
          <li className={css.headerLi}>
            <NavLink to="/movies" className={css.navLink}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
