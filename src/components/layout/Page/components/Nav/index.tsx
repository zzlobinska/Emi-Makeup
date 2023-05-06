import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import style from './Nav.module.scss';

import emiMakeup from '../../../../../assets/emo-logo.png';

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.container}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            classNames(style.link, {
              [style.active]: isActive
            })
          }
        >
          moje prace
        </NavLink>
        <NavLink
          to='/about-me'
          className={({ isActive }) =>
            classNames(style.link, {
              [style.active]: isActive
            })
          }
        >
          o mnie
        </NavLink>
      </div>
      <Link
        className={style.logo}
        to='/'
      >
        <img alt='logo of emi makeup' src={emiMakeup} />
      </Link>
      <div className={style.container}>
        <NavLink
          to='/prices'
          className={({ isActive }) =>
            classNames(style.link, {
              [style.active]: isActive
            })
          }
        >
          cennik
        </NavLink>
        <NavLink
          to='/calendar'
          className={({ isActive }) =>
            classNames(style.link, {
              [style.active]: isActive
            })
          }
        >
          kalendarz
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
