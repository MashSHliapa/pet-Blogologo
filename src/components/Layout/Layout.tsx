import { CardCatalog } from '../CardCatalog/CardCatalog';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <CardCatalog/>
      <Footer />
    </div>
  );
}
