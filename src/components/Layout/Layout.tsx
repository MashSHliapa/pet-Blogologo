import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { CardItem } from '../../pages/CardItem/CardItem';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

export function Layout() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
