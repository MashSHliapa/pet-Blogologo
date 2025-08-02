import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import './Breadcrumbs.scss';

export function Breadcrumbs(props: { currentPage: React.ReactNode }) {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const isCardItemPage = matchPath('/selected/:id', location.pathname) !== null;

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <NavLink to="/" target="_top">
            Back to home <span className="breadcrumbs__slash">/</span>
          </NavLink>
        </li>
        <li
          className={theme ? ' breadcrumbs__item-active_dark' : ' breadcrumbs__item-active_light'}
          aria-current="page"
        >
          {isCardItemPage ? `POST ${props.currentPage}` : props.currentPage}
        </li>
      </ul>
    </div>
  );
}
