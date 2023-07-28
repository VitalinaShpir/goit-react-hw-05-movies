import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { RiHomeHeartFill } from 'react-icons/ri';
import { BiCameraMovie } from 'react-icons/bi';

export const Header = () => {
  return (
    <nav className={css.navbar}>
      <ul className={css.navbarList}>
        <li className={css.navItem}>
          <NavLink className={css.navlink} aria-current="page" to="/">
           <RiHomeHeartFill/> Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.navlink} to="/movies">
            <BiCameraMovie/>Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
