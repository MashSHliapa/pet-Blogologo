import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { Switch } from '../Switch/Switch';
import './Footer.scss';

export function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme ? 'footer footer-dark' : 'footer footer-light'}>
      <div className="footer__container _container">
        <div
          className={theme ? 'footer__separator footer__separator_dark' : 'footer__separator footer__separator_light'}
        ></div>
        <div className="footer__body">
          <p className="footer__copyright">©{new Date().getFullYear()} Blogolog</p>
          <div className="footer__switch-wrapper">
            <p className="footer__switch-text">Dark theme</p>
            <div className="footer__switch">
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
