import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { SearchForm } from '../SearchForm/SearchForm';
import logo from '../../assets/images/logo.svg';
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
            <SearchForm />
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
