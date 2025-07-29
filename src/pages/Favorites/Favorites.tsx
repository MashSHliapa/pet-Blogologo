import { useSelector } from 'react-redux';
import { CardCatalog } from '../../components/CardCatalog/CardCatalog';
import type { ICatalogCard } from '../../types/interfaces';
import type { RootState } from '../../redux/store';
import favoritesEmpty from '../../assets/images/favorites_empty.png';

export function Favorites() {
  const { data: posts } = useSelector((state: RootState) => state.favorites);
  const favorites = posts.map((item: ICatalogCard) => <CardCatalog key={item.id} post={item} />);
  return (
    <div className="blog">
      <div className="blog__container _container">
        <div className="blog__body">
          <div className="blog__title">Favorites</div>
          <div className="blog__catalog">
            {favorites.length < 1 ? <img src={favoritesEmpty} alt="favoritesEmpty" /> : favorites}
          </div>
        </div>
      </div>
    </div>
  );
}
