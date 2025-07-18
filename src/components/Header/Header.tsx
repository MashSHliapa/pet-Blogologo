import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/icons/search_icon.svg';
import burger from '../../assets/icons/burger.svg';
import './Header.scss';

export function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={theme ? 'header header-dark' : 'header header-light'}>
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__search-form search-form">
            <form action="#" className="search-form__form">
              <input type="text" className="search-form__input" />
              <button type="submit" className="search-form__button">
                <img src={search} alt="search" />
              </button>
            </form>
          </div>
          <div className="header__user user">
            <div className="user__icon">MS</div>
            <div className="user__name">Masha Shliapanikova</div>
          </div>
          <div className="header__burger">
            <img src={burger} alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
}
