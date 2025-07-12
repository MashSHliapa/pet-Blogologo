import { Blog } from '../../pages/Blog/Blog';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}
