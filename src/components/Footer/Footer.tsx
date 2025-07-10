import { Switch } from '../Switch/Switch';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__separator"></div>
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
